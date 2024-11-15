from langchain_openai import AzureOpenAIEmbeddings, AzureChatOpenAI
from qdrant_client import QdrantClient
from langchain_qdrant import QdrantVectorStore
from qdrant_client.http import models
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
from pydantic import BaseModel
import os 

def read_text(file: str):
    with open(file, 'r', encoding='utf-8') as file:
        content = file.read().strip().split('\n\n')
    return content

def map_list_to_objs(data: list):
    return [{"id": idx, "info": info} for idx, info in enumerate(data)]

embeddings_model = AzureOpenAIEmbeddings( api_key=os.getenv('AZURE_TEXT_SMALL_API_KEY'),
                         azure_deployment="text-3-small",
                         openai_api_version="2024-02-15-preview",
                         azure_endpoint="https://openai-0410.openai.azure.com/openai/deployments/text-embedding-3-small/embeddings?api-version=2023-05-15",)

client = QdrantClient()
collection_name = "products"
text_content = read_text("products.txt")

qdrant = QdrantVectorStore.from_texts( text_content, embeddings_model, url="localhost", collection_name=collection_name, force_recreate=True)

retriever = qdrant.as_retriever()
model = AzureChatOpenAI( api_key=os.getenv("AZURE_API_KEY"),
                        openai_api_version="2024-06-01",
                        azure_deployment="gpt-4o-mini",
                        azure_endpoint="https://ai041-m2op46ox-eastus.openai.azure.com/openai/deployments/gpt-4o-mini/chat/completions?api-version=2024-08-01-preview",
                        temperature=0,)

prompt = ChatPromptTemplate.from_template("""請回答依照 context 裡的資訊來回答問題: <context> {context} </context> Question: {input}""")

document_chain = create_stuff_documents_chain(model, prompt)
retrieval_chain = create_retrieval_chain(retriever, document_chain)

# Add typing for input
class Question(BaseModel):
    input: str

rag_chain = retrieval_chain.with_types(input_type=Question)


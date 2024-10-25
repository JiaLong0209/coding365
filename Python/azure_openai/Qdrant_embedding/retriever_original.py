
import os
from openai import AzureOpenAI
from qdrant_client import QdrantClient

def get_embedding(text: str):
    client = AzureOpenAI(
        azure_endpoint = "https://openai-0410.openai.azure.com/openai/deployments/text-embedding-3-small/embeddings?api-version=2023-05-15", 
        api_key = os.getenv('AZURE_TEXT_SMALL_API_KEY'),
        api_version="2024-02-15-preview"
    )
    response = client.embeddings.create(input = text, model = "text-small")
    return response.data[0].embedding

# Start search 
if __name__== "__main__":

    client = QdrantClient("http://localhost:6333")
    collection_name = "products"

    query_text = "Please give me the information of product A"
    query_embedding = get_embedding(query_text)

    search_result = client.search(
            collection_name=collection_name,
            query_vector=query_embedding,
            limit=1,
            append_payload=True,
            )

    print(search_result)


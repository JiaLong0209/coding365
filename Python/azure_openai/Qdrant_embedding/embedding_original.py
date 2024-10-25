import os
from openai import AzureOpenAI
from qdrant_client import QdrantClient
from qdrant_client.http import models
from qdrant_client.http.models import PointStruct

def read_text(file: str):
    with open(file, 'r', encoding='utf-8') as file:
        content = file.read().strip().split('\n\n')
    return content

def map_list_to_objs(data: list):
    return list(map(lambda x: {"id": x[0], "info": x[1]}, [(i, info) for i, info in enumerate(data)]))

def get_embedding(text: str):
    client = AzureOpenAI(
        azure_endpoint = "https://openai-0410.openai.azure.com/openai/deployments/text-embedding-3-small/embeddings?api-version=2023-05-15", 
        api_key = os.getenv('AZURE_TEXT_SMALL_API_KEY'),
        api_version="2024-02-15-preview"
    )
    response = client.embeddings.create(input = text, model = "text-small")
    return response.data[0].embedding

if __name__== "__main__":

    client = QdrantClient("http://localhost:6333")
    collection_name = "products"

    if not client.collection_exists(collection_name = collection_name):
        client.create_collection(
            collection_name=collection_name,
            vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
        )
        print("Not exisit, collection created")
        
    text_content = read_text("./products.txt")
    data_objs = map_list_to_objs(text_content)
    

    embedding_array = [get_embedding(text["info"]) for text in data_objs]

    for i, vector in enumerate(embedding_array):
        client.upsert(
                collection_name=collection_name,
                points=[PointStruct(id=i, vector=vector, payload=data_objs[i])]
                )




import os
from openai import AzureOpenAI
from qdrant_client import QdrantClient
from qdrant_client.http import models
from qdrant_client.http.models import PointStruct
from typing import List, Dict

API_KEY = os.getenv('AZURE_TEXT_SMALL_API_KEY')
AZURE_ENDPOINT = "https://openai-0410.openai.azure.com/openai/deployments/text-embedding-3-small/embeddings?api-version=2023-05-15"
API_VERSION = "2024-02-15-preview"
VECTOR_SIZE = 1536
DISTANCE_METRIC = models.Distance.COSINE

COLLECTION_NAME = "products"

def read_text(file_path: str) -> List[str]:
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read().strip().split('\n\n')

def map_list_to_objs(data: List[str]) -> List[Dict]:
    return [{"id": idx, "info": info} for idx, info in enumerate(data)]

def create_azure_client() -> AzureOpenAI:
    return AzureOpenAI(azure_endpoint=AZURE_ENDPOINT, api_key=API_KEY, api_version=API_VERSION)

def get_embedding(text: str, client: AzureOpenAI) -> List[float]:
    response = client.embeddings.create(input=text, model="text-small")
    return response.data[0].embedding

def initialize_collection(client: QdrantClient, collection_name: str):
    if not client.collection_exists(collection_name=collection_name):
        client.create_collection(
            collection_name=collection_name,
            vectors_config=models.VectorParams(size=VECTOR_SIZE, distance=DISTANCE_METRIC),
        )
        print(f"Collection '{collection_name}' created as it did not exist.")
        
def process_and_store_data(file_path: str):
    azure_client = create_azure_client()
    qdrant_client = QdrantClient("http://localhost:6333")
    initialize_collection(qdrant_client, COLLECTION_NAME)

    # Read and process data
    text_content = read_text(file_path)
    data_objs = map_list_to_objs(text_content)
    embeddings = [get_embedding(text["info"], azure_client) for text in data_objs]

    points = [
        PointStruct(id=obj["id"], vector=embedding, payload=obj)
        for obj, embedding in zip(data_objs, embeddings)
    ]
    
    qdrant_client.upsert(collection_name=COLLECTION_NAME, points=points)

    print("Data successfully processed and stored in Qdrant.")

if __name__ == "__main__":
    process_and_store_data("./products.txt")

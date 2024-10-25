import os
from openai import AzureOpenAI
from qdrant_client import QdrantClient
from typing import List, Dict

# Configuration
API_KEY = os.getenv('AZURE_TEXT_SMALL_API_KEY')
AZURE_ENDPOINT = "https://openai-0410.openai.azure.com/openai/deployments/text-embedding-3-small/embeddings?api-version=2023-05-15"
API_VERSION = "2024-02-15-preview"
QDRANT_URL = "http://localhost:6333"
COLLECTION_NAME = "products"
EMBEDDING_MODEL = "text-small"

def create_azure_client() -> AzureOpenAI:
    return AzureOpenAI(
        azure_endpoint=AZURE_ENDPOINT,
        api_key=API_KEY,
        api_version=API_VERSION
    )

def get_embedding(text: str, client: AzureOpenAI) -> List[float]:
    response = client.embeddings.create(input=text, model=EMBEDDING_MODEL)
    return response.data[0].embedding

def create_qdrant_client() -> QdrantClient:
    return QdrantClient(QDRANT_URL)

def search_in_qdrant(client: QdrantClient, collection_name: str, query_embedding: List[float], limit: int = 1) -> List[Dict]:
    return client.search(
        collection_name=collection_name,
        query_vector=query_embedding,
        limit=limit,
        append_payload=True
    )

def perform_search(query_text: str):
    azure_client = create_azure_client()
    qdrant_client = create_qdrant_client()

    query_embedding = get_embedding(query_text, azure_client)
    
    search_result = search_in_qdrant(qdrant_client, COLLECTION_NAME, query_embedding)
    
    print("Search Results:", search_result)

if __name__ == "__main__":
    query_text = "Please give me the information of product A"
    perform_search(query_text)




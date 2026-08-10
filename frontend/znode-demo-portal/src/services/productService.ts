export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  isActive: boolean;
}

const API_URL = "https://localhost:7129/api";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/Products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
export interface ProductCardProps {
  id: string;
  shopifyProductId: string;
  title: string;
  description: string;
  price: string;
  mainImage: string;
  images?: string[];
}
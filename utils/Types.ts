export interface ProductCardProps {
  id: string;
  shopifyProductId: string;
  title: string;
  subtitle?: string;
  description1: string | React.ReactNode;
  description2?: string | React.ReactNode;
  fullDescription?: string | React.ReactNode;
  price: string;
  mainImage: string;
  images?: string[];
}

export interface Product {
  id: string;
  shopifyProductId: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  fullDescription: string;
  price: string;
  mainImage: string;
  images: string[];
}
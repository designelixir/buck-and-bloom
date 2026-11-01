export interface ProductCardProps {
  id: string;
  shopifyProductId?: string;
  buttonLink?: string; // used when there is no shopifyProductId
  buttonText?: string;
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
  showProduct: boolean;
  shopifyProductId?: string;
  buttonLink?: string; // used when there is no shopifyProductId
  buttonText?: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  fullDescription: string;
  price: string;
  mainImage: string;
  images: string[];
}
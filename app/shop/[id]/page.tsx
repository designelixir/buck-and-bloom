"use client"

import Nav from "@/app/components/Nav";
import { productsData } from "@/utils/productData";
import { use, useEffect, useState } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    // Find the product that matches the URL id
    const foundProduct = productsData.find(p => p.id === resolvedParams.id);
    setProduct(foundProduct);
  }, [resolvedParams.id]);

  if (!product) {
    return (
      <main className="flex-center-center flex-column fade-in">
        <Nav></Nav>
        <section className="basic-padding">
          <h1 className="centered-text">Product not found</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-center-center flex-column fade-in">
      <Nav></Nav>
      <section className="shop-header basic-padding">
        <h1 className="centered-text">{product.title}</h1>
        <p className="centered-text">{product.description}</p>
        <p className="centered-text">{product.price}</p>
      </section>
      <section className="product-grid flex-start-start flex-wrap">
        {/* Display your product images and details here */}
        <img src={product.mainImage} alt={product.title} />
        {product.images.map((img: string, index: number) => (
          <img key={index} src={img} alt={`${product.title} ${index + 1}`} />
        ))}
      </section>
    </main>
  );
}
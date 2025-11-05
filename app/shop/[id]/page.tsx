"use client"

import Nav from "@/app/components/Nav";
import { productsData } from "@/utils/productData";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import ImageSlideshow from "@/app/components/ImageSlideshow";
import ShopifyBuyButton from "@/app/components/ShopifyBuyButton";

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
        <section className="flex-center-center flex-column" style={{height: '100vh', padding: '200px 50px 50px'}}>
          <h1 className="centered-text">Oh no! This product doesn&apos;t exist.</h1>
          <div className="missing-cheese"></div>
          <button><Link href="/shop">Return to shop?</Link></button>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-center-center flex-column fade-in">
      <Nav></Nav>
      <section className="shop-header basic-padding flex-center-center flex-column">
        <Link className="no-link-styling" href="/shop"><h3 className="red-text native-record">&larr; Back to Shop</h3></Link>
        <div style={{padding: '25px 0'}} className="centered-text">
          <h1 className="centered-text no-text-spacing">{product.title}</h1>
          
        </div>
        <div className="flex-start-start full-width" style={{maxWidth: '98vw'}}>
          <ImageSlideshow images={[product.mainImage, ...product.images]} title={product.title} />
        </div>
        {product.subtitle && <h2 className="product-page-subtitle no-text-spacing">{product.subtitle}</h2>}
        <div className="centered-text" dangerouslySetInnerHTML={{ __html: `${product.description1} ${product.description2}` }} />
        <p className="centered-text product-card-price">{product.price}</p>
        <ShopifyBuyButton shopifyProductId={product.shopifyProductId} id={product.id} />
      </section>
      <section className="basic-padding">
        <h3 className="red-text native-record">Additional Product Details</h3>
        <div dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
      </section>
      
      

    </main>
  );
}
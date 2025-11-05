"use client"
import Nav from "../components/Nav";
import ProductGrid from "../components/ProductGrid";

export default function ShopPage() {
  return (
    <main className="flex-center-center flex-column fade-in">
      <Nav></Nav>
      <section className="shop-header basic-padding">
        <h1 className="centered-text">Shop Cheese</h1>
        <p className="centered-text">Click a product for more details, and important information about delivery and pickup!</p>
      </section>
      <section className="product-grid flex-start-start flex-wrap section-no-padding">
        <ProductGrid></ProductGrid>

      </section>
      
      
    </main>
  );
}

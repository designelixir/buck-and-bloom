"use client"
import VisitUs from "../components/VisitUs";
import Nav from "../components/Nav";
import HeroText from "../components/HeroText";
import Markets from "../components/Markets";
import About from "../components/About";
import Contact from "../components/Contact";
import { marketData } from "../components/MarketsData";
import ProductSummary from "../components/ProductSummary";
import ProductGrid from "../components/ProductGrid";

export default function ShopPage() {
  return (
    <main className="flex-center-center flex-column fade-in">
      <Nav></Nav>
      <section className="shop-header basic-padding">
        <h1 className="centered-text">Shop Cheese</h1>
        <p className="centered-text">Here is a description about buying cheese from us.</p>
      </section>
      <section className="product-grid flex-start-start flex-wrap section-no-padding">
        <ProductGrid></ProductGrid>

      </section>
      
      
    </main>
  );
}

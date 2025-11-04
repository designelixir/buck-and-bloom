"use client"
import VisitUs from "../components/VisitUs";
import Nav from "../components/Nav";
import HeroText from "../components/HeroText";
import Markets from "../components/Markets";
import About from "../components/About";
import Contact from "../components/Contact";
import { marketData } from "../components/MarketsData";
import ProductSummary from "../components/ProductSummary";

export default function Home2() {
  return (
    <main className="flex-center-center flex-column fade-in">
      <Nav></Nav>
      <HeroText></HeroText>
      <ProductSummary></ProductSummary>
      <Markets/>
      <VisitUs></VisitUs>
      <About></About>
      <Contact></Contact>
    </main>
  );
}

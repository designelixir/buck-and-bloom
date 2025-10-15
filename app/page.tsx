"use client"
import VisitUs from "./components/VisitUs";
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import Markets from "./components/Markets";
import About from "./components/About";
import Contact from "./components/Contact";
import { marketData } from "./components/MarketsData";

export default function Home() {
  return (
    <main className="flex-center-center flex-column fade-in">
      <Nav></Nav>
      <HeroText></HeroText>
      <Markets/>
      <VisitUs></VisitUs>
      <About></About>
      <Contact></Contact>
    </main>
  );
}

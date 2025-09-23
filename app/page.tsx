"use client"
import VisitUs from "./components/VisitUs";
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import Markets from "./components/Markets";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex-center-center flex-column fade-in">
      <Nav></Nav>
      <HeroText></HeroText>
      <Markets></Markets>
      <VisitUs></VisitUs>
      <About></About>
      <Contact></Contact>
    </main>
  );
}

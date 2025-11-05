'use client'
import Nav from "./components/Nav";
import Link from "next/link";

export default function Home2() {
  return (
    <main className="flex-center-center flex-column">
      <Nav></Nav>
      <div className="flex-center-center flex-column" style={{height: '100vh', padding: '200px 50px 50px'}}>
        <h1 className="centered-text">Oh no! This page doesn&apos;t exist.</h1>
        <div className="missing-cheese"></div>
        <button><Link href="/">Return home?</Link></button>
      </div>
    </main>
  );
}

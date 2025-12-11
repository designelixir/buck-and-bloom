"use client"
import Link from "next/link"; 
import Image from "next/image"; 

export default function Footer() {
  return (
    <footer className="basic-padding flex-center-center flex-column" role="contentinfo">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }} aria-label="Scroll to top">
        <Image src="/Buck&Bloom-Lettermark(cream).svg" className="basic-margin" alt="Buck and Bloom Lettermark Logo" width={300} height={100} priority />
      </button>
      <small className="cream-text reader-text native-record">Plant No. 08-98</small>

      <a href="/mailing-list" className="button no-link-styling">Join Our Mailing List</a>
      
      
      
      <address className="native-record normal" style={{marginTop:'10px'}}>
        <Link href="https://share.google/W6BgOYw4SK3XSdFVA" target="_blank" rel="noopener noreferrer" aria-label="View Buck and Bloom location on Google Maps" className="cream-text no-link-styling link-hover">31700 US Highway 24 North, Buena Vista, CO, 81211</Link>
      </address>
      
      <Link href="mailto:buckandbloomcheese@gmail.com" className="cream-text" aria-label="Email Buck and Bloom Cheese">buckandbloomcheese@gmail.com</Link>
      
      <nav className="flex-center-center basic-padding" aria-label="Social media links">
        <Link href="https://www.instagram.com/buckandbloomcheese/" target="_blank" rel="noopener noreferrer" aria-label="Follow Buck and Bloom on Instagram" className="hover" style={{ marginRight: "15px" }}><Image src="/ig.svg" alt="" role="presentation" width={25} height={25} /></Link>
        <Link href="https://www.facebook.com/profile.php?id=61578967916917" target="_blank" rel="noopener noreferrer" aria-label="Follow Buck and Bloom on Facebook" className="hover"><Image src="/fb.svg" alt="" role="presentation" width={25} height={25} /></Link>
      </nav>
      
        <Link href="https://designelixir.studio" target="_blank" rel="noopener noreferrer" aria-label="Visit Design Elixir Studio website" className="hover native-record no-link-styling">
          <small className="cream-text native-record" style={{ fontSize: "10px", opacity: 0.5, fontWeight: "100" }}>Made with <span aria-hidden="true">♥</span> by Design Elixir Studio</small>
        </Link>
      
      <style jsx>{`
        footer {background-image: url('/black-textured.png'); background-size: 100% 100%; width: 100vw; animation: fade-in 1s linear 2s both;}
      `}</style>
    </footer>
  );
}

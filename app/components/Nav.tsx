"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const logoRef = useRef<HTMLImageElement | null>(null);

  const handleToggleMenu = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

 useEffect(() => {
  if (!logoRef.current) return;

  ScrollTrigger.create({
    trigger: document.documentElement,
    start: "top top",
    end: "200px top", // scroll distance for full shrink
    scrub: true,
    onUpdate: (self) => {
      const scale = gsap.utils.mapRange(0, 1, 150, 100, self.progress);
      if (logoRef.current) {
        logoRef.current.style.width = `${scale}px`;
        logoRef.current.style.height = `${scale}px`;
      }
    },

    onEnter: () => gsap.to(".nav-inner", { minHeight: "unset", duration: 0.3, ease: "power2.out" }),
    onEnterBack: () => gsap.to(".nav-inner", { minHeight: "170px", duration: 0.3, ease: "power2.out" }),
  });
}, [animationDone]);
const applyLink = 'https://docs.google.com/forms/d/e/1FAIpQLSf-U_2trl1PpW6cQVJpoaUQHS8FeDw81A7FUreL6GIibPXDpA/viewform'

  return (
    <>
    {/* Announcement bar - comment out to hide */}
    <div className="announcement-bar-container slide-in-top flex-start-start no-flex-grow">
      <div className="flex-center-spacebetween no-flex-grow full-width announcement-bar-inner">
        <div style={{ width: '75px' }}></div>
        <Link href={applyLink} target="_blank" className="no-link-styling">
          <p className="centered-text">We are hiring <strong>Part-time Cheesemakers</strong>! Join our enthusiastic team here at Buck & Bloom. Click here to learn for job details & application. </p>
        </Link>
        <button onClick={(e) => e.currentTarget.closest('.announcement-bar-inner')?.parentElement?.classList.add('announcement-bar-hide')} className="close-button no-hover-grow" aria-label="Close announcement">&times;</button>
      </div>
    </div>
    
    <nav className={`fade-in flex-start-center flex-column slide-in-top`}>
      <div className="nav-inner flex-center-spacebetween full-width">
        <div className="desktop flex-center-spacebetween mobile-hide">
          
          {/* <a id="shopLink" href="/shop/local-cheese-share" className="nav-link shop-link">Cheese Share</a>
          <Image src="/flora.svg" alt="floral detail" height={25} width={25} /> */}
          <a id="marketsLink" href="/#markets" className="nav-link markets-link">Markets</a>
          <Image src="/flora.svg" alt="floral detail" height={25} width={25} />
          <a id="visitLink" href="/#visit-us" className="nav-link visit-us-link">Visit Us</a>
          <Image src="/flora.svg" alt="floral detail" height={25} width={25} />
          <a id="aboutLink" href="/#about" className="nav-link about-link">About</a>
          
        </div>

        <div className="mobile-left flex-center-center mobile-show">
          <Link href="https://www.instagram.com/buckandbloomcheese/" target="_blank" className="no-link-styling fade-in" style={{ marginRight: "15px" }}>
            <Image src="/ig.svg" alt="instagram icon" width={20} height={20} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61578967916917" target="_blank" className="no-link-styling fade-in">
            <Image src="/fb.svg" alt="facebook icon" width={20} height={20} />
          </Link>
        </div>

          <Link href="/">
            <Image ref={logoRef} src="/Buck&Bloom-TileLogo.png" alt="Buck & Bloom Tile Logo" width={150} height={150} priority />
          </Link>
        

        <div className="desktop flex-center-spacebetween mobile-hide">
          
          
           <a id="tourLink" href="/tour" className="nav-link shop-link">Tour the Farm</a>
          <Image src="/flora.svg" alt="floral detail" height={25} width={25} />
          <a id="jobsLink" href="/jobs" className="nav-link jobs-link">Jobs</a>
          <Image src="/flora.svg" alt="floral detail" height={25} width={25} />
          <a id="contactLink" href="/#contact" className="nav-link contact-link">Contact</a>
          
        </div>

        <div className="mobile-right flex-center-center mobile-show">
          <button
            onClick={handleToggleMenu}
            className="mobile-nav-toggle centered-text"
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{ backgroundImage: "unset", fontSize: "18px" }}
          >
            {open ? "X" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu flex-center-center flex-column mobile-show">
          {/* <a id="shopLink" onClick={handleLinkClick} href="/shop/local-cheese-share" className="nav-link shop-link">Cheese Share</a> */}
          <a id="marketsLink" onClick={handleLinkClick} href="/#markets" className="nav-link markets-link">Markets</a>
          <a id="visitLink" onClick={handleLinkClick} href="/#visit-us" className="nav-link visit-us-link">Visit Us</a>
          <a id="aboutLink" onClick={handleLinkClick} href="/#about" className="nav-link about-link">About</a>
          <a id="tourLink" onClick={handleLinkClick} href="/tour" className="nav-link tour-link">Tour the Farm</a>
          <a id="jobsLink" onClick={handleLinkClick} href="/jobs" className="nav-link jobs-link">Jobs</a>
          <a id="contactLink" onClick={handleLinkClick} href="/#contact" className="nav-link contact-link">Contact</a>
          
        </div>
      )}
      
      
    </nav>
    </>
  );
}

"use client"
import Link from "next/link";
import Image from "next/image";
import SectionObserver from "./SectionObserver";

export default function VisitUs() {

  return (
    <section id="visit-us" className="textured-bg-black" style={{ padding: "50px 2.5vw"}}>
      <SectionObserver sectionId="visit-us" />
      <div className="flex-center-center">
        <Image src="/windmill-cream.svg" height={100} width={50} style={{margin: '25px'}} alt="windmill graphic"></Image>
      </div>
      <div className="flex-center-center">
          <Image src="flora-2.svg" alt="floral detail" height={25} width={25} style={{marginRight: '25px'}}></Image>
          <h1 className="centered-text cream-text">Visit Us</h1>
          <Image src="flora-3.svg" alt="floral detail" height={25} width={25} style={{marginLeft: '25px'}}></Image>
      </div>
      <h3 className="centered-text cream-text">
        You can now come for a visit! Come and shop our cheeses at the <Link href="https://share.google/cWO3BJQooefN6bzhX">Jumpin' Good Country Store</Link>, also offering local salami, crackers, goat fudge, gifts, horse tack, and more. 
        Meet our baby goats (hopefully future milk producers!) who were born this spring and are eager to meet you.
      </h3>
      <div className="flex-center-center basic-padding visit-us-button-wrapper">
          <Link target="_blank" style={{marginRight: '10px'}} href="https://www.google.com/maps/place/Jumpin%E2%80%99+Good+Country+Store+%26+Buck+n%E2%80%99+Bloom+Cheese+Shop/data=!4m2!3m1!1s0x0:0xfa6afe646a042e2a?sa=X&ved=1t:2428&ictx=111">
          <button>Jumpin' Good Country Store Hours</button>
          </Link>
          <Link target="_blank" href="https://www.google.com/maps?client=firefox-b-1-d&sca_esv=a1588e28351376e1&lsig=AB86z5VgdV8ohF0-ZZTYCWzNpas2&biw=981&bih=1012&dpr=2&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KRdNUSd9tWqHMTQUGxTLQ8bC&daddr=31700+US-24,+Buena+Vista,+CO+81211">
            <button>Directions</button>
          </Link>
      </div>

        
        <style jsx>{`
        
      `}</style>
    </section>
    
    
    
  );
}

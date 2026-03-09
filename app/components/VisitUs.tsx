"use client"
import Link from "next/link";
import Image from "next/image";
import SectionObserver from "./SectionObserver";

export default function VisitUs() {

  return (
    <section id="visit-us" className="textured-bg-black" style={{ padding: "120px 2.5vw"}}>
      <SectionObserver sectionId="visit-us" />
      <div className="flex-center-center">
        <Image src="/windmill-cream.svg" height={100} width={50} style={{margin: '25px'}} alt="windmill graphic"></Image>
      </div>
      <div className="flex-center-center">
          <Image src="/flora-2.svg" alt="floral detail" height={25} width={25} style={{marginRight: '25px'}}></Image>
          <h1 className="centered-text cream-text">Visit Us</h1>
          <Image src="/flora-3.svg" alt="floral detail" height={25} width={25} style={{marginLeft: '25px'}}></Image>
      </div>
      <h3 className="centered-text cream-text">
        Come for a visit! Shop our cheeses at the <Link href="https://maps.app.goo.gl/bmdHdDnj1RaeHvyJA" target="_blank">BV Farm General Store</Link>, also offering salami, crackers, farm fresh eggs, and goat treats. Say hi to our young goats and hens! 
        &nbsp;<Link href="/tour">Better yet, take a tour of the farm to learn all about our creamery and animals,</Link> or experience serenity and a taste of the mountain ranch life by booking a stay with your group just across the pasture at <Link href="https://www.airbnb.com/rooms/1584812800671844775" target="_blank">BV Farm Stay.</Link>

      </h3>
      <div className="flex-center-center basic-padding visit-us-button-wrapper">
          <Link target="_blank" style={{marginRight: '10px'}} href="/tour">
          <button>Take a Tour</button>
          </Link>
          <Link target="_blank" href="https://www.airbnb.com/rooms/1584812800671844775">
            <button>Book the BV Farm Stay House</button>
          </Link>
      </div>

      <Link className="no-link-styling no-text-spacing flex-center-center" target="_blank" href="https://maps.app.goo.gl/bmdHdDnj1RaeHvyJA">
                                    <Image src="/location.svg" alt="location pin icon" width={15} height={15} style={{marginRight: '5px', marginTop: '5px'}}></Image>
                                    <h4 className="no-text-spacing centered-text cream-text" style={{whiteSpace: 'wrap'}}>31700 US-24, Buena Vista, CO 81211</h4>
                                </Link>

        
        <style jsx>{`
        
      `}</style>
    </section>
    
    
    
  );
}

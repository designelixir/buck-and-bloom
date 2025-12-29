"use client"
import Link from "next/link";
import Image from "next/image";
import SectionObserver from "./SectionObserver";
import MarketGrid from "./MarketGrid";
import { marketData, eventData } from "@/utils/marketsData";
import { MarketGridProps } from "@/types/globalTypes";



export default function Markets({ events = [] }: MarketGridProps) {
    return (
        <section id="markets" style={{paddingTop: '120px'}}>
            <SectionObserver sectionId="markets" />
            <div className="flex-center-center">
                <Image src="/flora-2.svg" alt="floral detail" height={25} width={25} style={{marginRight: '25px'}}></Image>
                <h2 className="centered-text">Markets, Events &amp; Hours</h2>
                <Image src="/flora-3.svg" alt="floral detail" height={25} width={25} style={{marginLeft: '25px'}}></Image>
            </div>
            
            <div>
                <h3 className="centered-text" style={{marginBottom: '25px'}}>For more markets and to keep up with the farm, follow us on Instagram, or <Link href="/mailing-list">join our mailing list.</Link></h3>
                {/* <h4 className="centered-text red-text basic-padding-top-bottom">Farmer's Markets</h4> */}
                <MarketGrid events={marketData} />
            </div>
            {/* <div className="basic-padding-top-bottom">
                <h4 className="centered-text red-text basic-padding-top-bottom">Holiday Markets &amp; Events</h4>
                <MarketGrid events={eventData} />
            </div> */}
            
            <div className="flex-center-center flex-column basic-padding-top-bottom">
                
                <Link href="https://www.instagram.com/buckandbloomcheese/" target="_blank" className="no-link-styling" style={{marginRight:'15px'}}>
                    <button> @buckandbloomcheese</button>
                </Link>
            </div>
        </section>
    )
}
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
                <h3 className="centered-text" >For more markets and to keep up with the farm, follow us on Instagram, or <Link href="/mailing-list">join our mailing list.</Link></h3>
                <MarketGrid  heading="Farmer's Markets" hideWhenEmpty events={marketData} />
                <MarketGrid events={eventData} heading="Holiday Markets & Events" hideWhenEmpty />
            </div>
            
            
        </section>
    )
}
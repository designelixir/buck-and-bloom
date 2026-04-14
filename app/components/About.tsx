"use client"
import Link from "next/link"
import SectionObserver from "./SectionObserver"
import Image from "next/image"

export default function About(){
   
    return(
        <section id="about" style={{padding: "120px 0 25px"}}>
            <SectionObserver sectionId="about"></SectionObserver>
            <div id="aboutTitle" className="flex-center-center" style={{ position: "relative", zIndex: 5 }}>
                <Image src="/flora-2.svg" alt="floral detail" height={25} width={25} style={{ marginRight: "25px" }} />
                <h1 className="centered-text about-title">About Us</h1>
                <Image src="/flora-3.svg" alt="floral detail" height={25} width={25} style={{ marginLeft: "25px" }} />
            </div>
            
                <div className="panel flex-center-end flex-column">
                    <div className="flex-center-start full-width scene">
                        <div className="greg cutout about-animate-1"></div>
                        <div className="staff cutout about-animate-1"></div>
                        <div className="staff-2 cutout about-animate-1"></div>
                        <div className="amanda cutout about-animate-1"></div>
                        <div className="jade cutout about-animate-1"></div>
                        <div className="rhonda cutout about-animate-1"></div>
                    </div>
                     <div className="about-text-wrapper basic-padding basic-margin centered-text about-text-wrapper-1 animate-in flex-center-center flex-column">
                        
                        <h3>
                            Carrying on the cheese legacy of Buena Vista, we are thrilled to be making cheese in an impressive facility that used to be known as Jumpin&apos; Good Goat Dairy. After several years lying dormant, we fired up all the equipment in Spring of 2025 and have been pasteurizing, culturing, cutting curd, and making wheels ever since. 
                            We love that we can continue to produce goat cheese in the Rocky Mountains.
                        </h3>
                    </div>
                   
                </div>

                <div className="panel flex-center-end flex-column section-animation">
                    <div className="flex-end-spacebetween amanda-mtns about-animate-2">
                        <div className="cheeses cutout about-animate-2"></div>
                        <div className="cheeses-2 cutout about-animate-2"></div>
                    </div>
                    <div className="about-text-wrapper basic-padding basic-margin centered-text about-text-wrapper-2 animate-in flex-center-center flex-column">
                        
                        <h3>
                            We prioritize sourcing the highest quality milk possible from independent family farms across Colorado. Our cow milk is produced by <Link href="https://www.coloradocow.com/" target="_blank">Colorado Cow</Link> in Kersey, CO, and our goat milk (available seasonally) is produced by <Link href="https://www.yoderfamilyfarms.net/" target="_blank">Yoder Family Farms</Link> in Trinidad, CO. Our own young goat herd will be producing milk starting spring of 2027, but we will always source the majority of our milk from other dairy farmers that we know and trust.
                        </h3>
                    </div>
                </div>
        </section>
    )
}
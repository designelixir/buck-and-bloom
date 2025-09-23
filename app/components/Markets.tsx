"use client"
import Link from "next/link";
import Image from "next/image";
import SectionObserver from "./SectionObserver";

export default function Markets(){
    return (
        <section id="markets">
        <SectionObserver sectionId="markets" />
        <div className="flex-center-center">
            <Image src="flora-2.svg" alt="floral detail" height={25} width={25} style={{marginRight: '25px'}}></Image>
            <h1 className="centered-text">Markets</h1>
            <Image src="flora-3.svg" alt="floral detail" height={25} width={25} style={{marginLeft: '25px'}}></Image>
        </div>
        
        <div className="flex-center-center flex-wrap">
            <div className="event flex-center-center basic-bg flex-column basic-padding">
                <h2 className="centered-text">Buena Vista Farmers Market</h2>
                <h3 className="bold-text red-text">Saturdays</h3>
                <p className="centered-text">9am - 1pm till October 4th</p>
                <Link href="https://www.foodshedalliance.com/discover-the-market" target="_blank">
                    <button className="black-button">Details</button>
                </Link>
            </div>
            <div className="event flex-center-center basic-bg flex-column basic-padding">
                <h2 className="centered-text">Salida Farmers Market</h2>
                <h3 className="bold-text red-text">Saturdays</h3>
                <p className="centered-text">8am - 12pm<br></br>
                    Fall hours - beginning Oct. 4th, 9am - 1pm
                </p>
                <Link href="https://www.foodshedalliance.com/discover-the-market" target="_blank">
                    <button className="black-button">Details</button>
                </Link>
            </div>
            <div className="event flex-center-center basic-bg flex-column basic-padding">
                <h2 className="centered-text">Vail Farmers Market</h2>
                <h3 className="bold-text red-text">Sundays</h3>
                <p className="centered-text">8am - 12pm<br></br>
                    Fall hours - beginning Oct. 4th, 9am - 1pm
                </p>
                <Link href="https://www.vailfarmersmarket.com/" target="_blank">
                    <button className="black-button">Details</button>
                </Link>
            </div>
        </div>
        <div className="flex-center-center flex-column basic-padding-top-bottom">
        <h2 className="centered-text">For more markets and to keep up with the farm, follow us on Instagram!</h2>
        <Link href="https://www.instagram.com/buckandbloomcheese/" target="_blank" className="no-link-styling" style={{marginRight:'15px'}}>
            <button> @buckandbloomcheese</button>
            </Link>
        </div>
    
    <style jsx>{`
        .event {background-image: url('/square-tan.png'); border: 2px solid var(--cream); border-radius: 2px; background-size: 100% 100%; margin: 2.5vw;}
        
      `}</style>
        </section>
    )
}
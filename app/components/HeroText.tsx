import Link from "next/link";

export default function HeroText() {

  return (
    <div className="hero-wrapper fade-in hero-wrapper-bg welcome-message flex-center-center flex-column">
        <h1 className="centered-text">Artisan cheese hand-crafted in Colorado&apos;s Highlands</h1>
        <h3 className="centered-text">
          Buck and Bloom Cheese Company is a small but mighty team of cheesemakers offering artisan goat and cow cheeses to our home state of Colorado. 
          At our creamery in Buena Vista, we create a variety of cheeses: several flavorful fresh chevres, fromage blanc, goat milk feta, bloomy rind cheeses, pepperjack, and aged goat and cow cheeses that ripen in our underground cheese cave. 
        </h3>
        {/* <div className="flex-center-center no-flex-grow">
           <Link href="/#shop">
            <button className="red-button basic-margin">Shop Cheese</button>
          </Link>
          <Link href="#markets">
            <button className="red-button basic-margin-top-bottom">Check Out Our Markets</button>
          </Link>
         
        </div> */}
    </div>
  );
}

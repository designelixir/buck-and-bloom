"use client"
import SectionObserver from "./SectionObserver"
import Image from "next/image"

export default function About(){
   
    return(
        <section id="about" style={{padding: "75px 0 25px"}}>
            <SectionObserver sectionId="about"></SectionObserver>
            <div id="aboutTitle" className="flex-center-center" style={{ position: "relative", zIndex: 5 }}>
                <Image src="flora-2.svg" alt="floral detail" height={25} width={25} style={{ marginRight: "25px" }} />
                <h1 className="centered-text about-title">About Us</h1>
                <Image src="flora-3.svg" alt="floral detail" height={25} width={25} style={{ marginLeft: "25px" }} />
            </div>
            
                <div className="panel flex-center-end flex-column basic-bg">
                    <div className="flex-center-start full-width scene">
                        <div className="greg cutout about-animate-1"></div>
                        <div className="staff cutout about-animate-1"></div>
                        <div className="staff-2 cutout about-animate-1"></div>
                        <div className="amanda cutout about-animate-1"></div>
                        <div className="jade cutout about-animate-1"></div>
                        <div className="rhonda cutout about-animate-1"></div>
                    </div>
                     <div className="about-text-wrapper basic-padding basic-margin centered-text about-text-wrapper-1 animate-in">
                        <h3 className="cream-text">
                            Carrying on the goat cheese legacy of Buena Vista, we are thrilled to be making cheese in an impressive facility that used to be known as Jumpin&apos; Good Goat Dairy. After several years lying dormant, we fired up all the equipment in Spring of 2025 and have been pasteurizing, culturing, cutting curd, and making wheels ever since. We love that we can continue to produce goat cheese in the Rocky Mountains.
                        </h3>
                    </div>
                   
                </div>

                <div className="panel flex-center-end flex-column basic-bg section-animation">
                    <div className="flex-end-spacebetween amanda-mtns about-animate-2">
                        <div className="cheeses cutout about-animate-2"></div>
                        <div className="cheeses-2 cutout about-animate-2"></div>
                    </div>
                    <div className="about-text-wrapper basic-padding basic-margin centered-text about-text-wrapper-2 animate-in">
                        <h3 className="cream-text">
                            Our goat milk is sourced from farms in Trinidad, Colorado, from farmers who give incredible care to their herd. We are proud to craft cheese from some of the best quality goat milk in the state, made fresh as soon as the milk arrives at our doors.
                        </h3>
                    </div>
                </div>
            


            
            <style jsx>{`
            .panel { max-width: 100vw; padding: 50px 0; overflow-x: clip;}
            .cutout { background-size: contain; background-repeat: no-repeat;}
            .about-text-wrapper {z-index: 5; background-image: url('/RuggedSquare(textured).png'); background-size: cover; background-repeat: no-repeat; background-position: center; }
            .about-text-wrapper-1 {margin-top: -150px}
            .about-text-wrapper-2 {margin-top: -50px;}

            .greg {background-image: url('/cutouts/greg-2-outlined.png'); width: 45vw; margin-left: -5vw; z-index: 2; aspect-ratio: 315/330;  }
            .staff {background-image: url('/cutouts/staff-cutout.png'); width: 33vw; aspect-ratio: 290/450; margin-left: -25vw; z-index: 1; }
            .staff-2 {background-image: url('/cutouts/staff-2-cutout.png'); width: 42vw; aspect-ratio: 380/325; margin-left: -15vw; z-index: 2;  }
            .amanda {background-image: url('/cutouts/amanda-outlined.png'); z-index: 0; width: 30vw; margin-left: -28vw; margin-top: -10vw; aspect-ratio: 290/486; }
            .jade {background-image: url('/cutouts/jade-cutout.png'); width: 40vw; aspect-ratio: 316/350; margin-left: -20vw;   z-index: 2;}
            .rhonda {background-image: url('/cutouts/rhonda-outlined.png'); width: 20vw; margin-left: -15vw;  aspect-ratio: 178/218; z-index: 1; }
            
            .amanda-mtns {background-image: url('/cutouts/amanda-mountains.png'); width: 100%; aspect-ratio: 977/400; background-size: cover; background-position: center 0; background-repeat: no-repeat;}
            .cheeses {background-image: url('/cutouts/cheeses-1-outline.png'); z-index: 3; width: 35vw;  max-width: 350px; margin-top: -30vh; aspect-ratio: 110/90;  transform: rotate(-25deg); }
            .cheeses-2 {background-image: url('/cutouts/cheeses-2-outline.png'); z-index: 3; width: 35vw; max-width: 325px;  margin-bottom: -5vh; transform: rotate(25deg); aspect-ratio: 110/90;  }

            .scene {max-width: 1200px; min-height: 500px;}


            @media only screen and (max-width: 700px) {
                .about-text-wrapper-1 {margin-top: -150px}
                .rhonda {display: none;}
                .amanda {margin-left: -50vw; margin-bottom: 10vh; width: 50vw; margin-right: -10vw;}
                .staff-2 {width: 70vw; margin-left: -40vw; margin-bottom: 5vh;}
                .staff {display: none;}
                .greg {width: 70vw; margin-left: -15vw; margin-top: 10vh;}
                .jade {width: 60vw; margin-right: -20vw; }
                .amanda-mtns {background-size: 200%; aspect-ratio: 977/800; background-position: 35% 0%}
                .cheeses {margin-bottom: 2vh; width: 50vw; margin-left: -5vw;}
                .cheeses-2 {display: none;}
            }

      `}</style>
        </section>
    )
}
import HeroText from "./components/HeroText"
import Markets from "./components/Markets"
import VisitUs from "./components/VisitUs"
import About from "./components/About"
import Contact from "./components/Contact"

export default function Homepage2(){
    return(

            <main className="full-width">
                <HeroText></HeroText>
                <Markets/>
                <VisitUs></VisitUs>
                <About></About>
                      <Contact></Contact>
            </main>
    )
}
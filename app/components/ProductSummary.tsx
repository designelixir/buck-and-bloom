import ProductGrid from "./ProductGrid"
import SectionObserver from "./SectionObserver"

export default function ProductSummary(){
    return(
        <section id="shop" className="flex-center-center flex-column" style={{paddingTop: '120px'}}>
            <SectionObserver sectionId="shop" />
            <h1 className="centered-text no-text-spacing">Join our Cheese Share!</h1>
            <div className="product-grid flex-start-start flex-wrap section-no-padding">
                <ProductGrid></ProductGrid>
            </div>
        </section>
              
    )
}
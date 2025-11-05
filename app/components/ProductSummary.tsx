import ProductGrid from "./ProductGrid"
import SectionObserver from "./SectionObserver"

export default function ProductSummary(){
    return(
        <section id="shop" className="flex-center-center flex-column">
            <SectionObserver sectionId="shop" />
            <h1 className="centered-text no-text-spacing">Shop Cheese</h1>
            <p className="centered-text">Click a product for more details, and important information about delivery and pickup.</p>
            <div className="product-grid flex-start-start flex-wrap section-no-padding">
                <ProductGrid></ProductGrid>
            </div>
        </section>
              
    )
}
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/utils/productData";

// Highlights the first product marked featured: true (and showProduct: true)
export default function ProductHero() {
    const product = productsData.find((p) => p.featured && p.showProduct);
    if (!product) return null;

    return (
        <section className="product-hero flex-center-center">
            <div className="product-hero-card flex-center-center box-shadow">
                <Link href={`/shop/${product.id}`} className="product-hero-image">
                    <Image src={product.mainImage} alt={product.title} fill sizes="(max-width: 800px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                </Link>
                <div className="product-hero-content flex-center-start flex-column">
                    <p className="native-script red-text product-hero-eyebrow no-text-spacing">Featured</p>
                    <h2>{product.title}</h2>
                    <p className="product-card-price">{product.price}</p>
                    <p>{product.description1}</p>
                    <Link href={`/shop/${product.id}`} className="no-link-styling">
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

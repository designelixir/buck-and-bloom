import ProductCard from './ProductCard';
import { productsData } from '@/utils/productData';

export default function ProductGrid() {
  if (!productsData || productsData.length === 0) {
    return <div className="flex-center-center"><h3 className="centered-text">No products for sale online, check back later!</h3></div>;
  }

  return (
    <div className="flex-start-center flex-wrap">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          shopifyProductId={product.shopifyProductId}
          title={product.title}
          description1={product.description1}
          price={product.price}
          mainImage={product.mainImage}
        />
      ))}
    </div>
  );
}
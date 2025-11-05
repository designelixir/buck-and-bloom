import ProductCard from './ProductCard';
import { productsData } from '@/utils/productData';

export default function ProductGrid() {
  return (
    <div className="flex-start-center flex-wrap" >
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
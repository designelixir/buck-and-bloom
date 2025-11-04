import ProductCard from './ProductCard';
import { productsData } from '@/utils/productData';

export default function ProductGrid() {
  return (
    <div
     className="flex-start-start flex-wrap"
    >
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          shopifyProductId={product.shopifyProductId}
          title={product.title}
          description={product.description}
          price={product.price}
          mainImage={product.mainImage}
          images={product.images}
        />
      ))}
    </div>
  );
}
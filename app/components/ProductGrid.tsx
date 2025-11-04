import ProductCard from './ProductCard';

// Example JSON dataset
const productsData = [
  {
    id: '1',
    shopifyProductId: '10783666012463',
    title: 'Holiday Cheese Board Bundle',
    description: 'Handcrafted aged cheddar with rich, complex flavors',
    price: '$24.99',
    mainImage: '/products/cheese-wheel.jpg',
    images: [
      '/products/cheese-wheel-1.jpg',
      '/products/cheese-wheel-2.jpg',
    ]
  },
  {
    id: '2',
    shopifyProductId: '10783691800879',
    title: 'Local Cheese Share - 10 Week On-Farm Pickup',
    description: 'Premium blue cheese with distinctive taste',
    price: '$175',
    mainImage: '/products/blue-cheese.jpg',
    images: [
      '/products/blue-cheese-1.jpg',
    ]
  },
];

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
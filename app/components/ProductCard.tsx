'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/utils/Types';

export default function ProductCard({ id, title, description1, price, mainImage }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Link href={`/shop/${id}`}>
          <Image src={mainImage} alt={title} fill style={{ objectFit: 'cover' }} />
        </Link>
      </div>
      <Link className="no-link-styling" href={`/shop/${id}`}><h3>{title}</h3></Link>
      <p className="product-card-price">{price}</p>
      <p className="product-card-description">{description1}</p>
      
      
      <div className="flex-center-center flex-column">
      <Link href={`/shop/${id}`} className="red-text"><button>Click for Details </button></Link>  
      </div>
    </div>
  );
}
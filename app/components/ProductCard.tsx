'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/utils/Types';

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export default function ProductCard({ id, shopifyProductId, title, description, price, mainImage, images = [] }: ProductCardProps) {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy) return;

      const client = window.ShopifyBuy.buildClient({
        domain: 'hnc3ap-y6.myshopify.com',
        storefrontAccessToken: 'ecdd75fda9b7eda01f72f6b95c10f989',
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent('product', {
          id: shopifyProductId,
          node: document.getElementById(`product-component-${id}`),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: { product: { '@media (min-width: 601px)': 
                { 'max-width': 'calc(25% - 20px)', 
                  'margin-left': '20px', 
                  'margin-bottom': '50px' } 
                }, 
              button: {
                  'font-family': 'Lora',
                  'background-image': 'url("https://www.buckandbloomcheese.com/red-nav.png")',
                  'background-size': '100% 100%',
                  'text-transform': 'uppercase',
                  'font-weight': '700',
                  'margin': '0',
                  'opacity': '8',
                  ':hover': {
                    'opacity': '1'
                  },
                } },
              contents: {
                img: false,
                title: false,
                price: false
              },
              text: {
                button: 'Add to cart'
              },
              googleFonts: ['Lora']
            },
           
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px'
                  }
                },
                button: {
                  'font-family': 'Lora',
                  'background-image': 'url("https://www.buckandbloomcheese.com/red-nav.png")',
                  'opacity': '8',
                  ':hover': {
                    'opacity': '1'
                  },
                }
              },
              googleFonts: ['Lora'],
              text: {
                button: 'Add to cart'
              }
            },
            option: {},
            cart: {
              styles: {
                button: {
                  'font-family': 'Lora',
                  'background-image': 'url("https://www.buckandbloomcheese.com/red-nav.png")',
                  'background-size': '100% 100%',
                  'opacity': '0.8',
                  ':hover': {
                    'opacity': '1'
                  }
                }
              },
              text: {
                total: 'Subtotal',
                button: 'Checkout'
              },
              googleFonts: ['Lora']
            },
            toggle: {
              styles: {
                toggle: {
                  'font-family': 'Lora',
                  'background-image': 'url("https://www.buckandbloomcheese.com/red-nav.png")',
                  'background-size': 'cover',
                  'opacity': '0.8',
                  ':hover': {
                    'opacity': '1'
                  }
                }
              },
              googleFonts: ['Lora']
            }
          }
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    scriptLoadedRef.current = true;
  }, [id, shopifyProductId]);

  return (
    <div className="product-card">
      <div className="product-card-image">
        <Link href={`/shop/` + id}>
        <Image src={mainImage} alt={title} fill style={{ objectFit: 'cover' }} />
        </Link>
      </div>
      <h3>{title}</h3>
      <p className="product-card-description">{description}</p>
      <p className="product-card-price">{price}</p>
      <div className="flex-center-center flex-wrap">
        <div id={`product-component-${id}`} ref={buttonContainerRef}></div>
        <Link href={`/shop/` + id}><button className="black-button">Details</button></Link>
      </div>
    </div>
  );
}
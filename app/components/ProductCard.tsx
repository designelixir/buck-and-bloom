'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  shopifyProductId: string;
  title: string;
  description: string;
  price: string;
  mainImage: string;
  images?: string[];
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export default function ProductCard({
  id,
  shopifyProductId,
  title,
  description,
  price,
  mainImage,
  images = [],
}: ProductCardProps) {
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
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px'
                  }
                },
                button: {
                  'font-family': 'Lora, serif',
                  'font-weight': 'bold',
                  ':hover': {
                    'background-color': '#c11c22'
                  },
                  'background-color': '#d61f26',
                  ':focus': {
                    'background-color': '#c11c22'
                  }
                }
              },
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
            productSet: {
              styles: {
                products: {
                  '@media (min-width: 601px)': {
                    'margin-left': '-20px'
                  }
                }
              }
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
                  'font-family': 'Lora, serif',
                  'font-weight': 'bold',
                  ':hover': {
                    'background-color': '#c11c22'
                  },
                  'background-color': '#d61f26',
                  ':focus': {
                    'background-color': '#c11c22'
                  }
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
                  'font-family': 'Lora, serif',
                  'font-weight': 'bold',
                  ':hover': {
                    'background-color': '#c11c22'
                  },
                  'background-color': '#d61f26',
                  ':focus': {
                    'background-color': '#c11c22'
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
                  'font-family': 'Lora, serif',
                  'font-weight': 'bold',
                  'background-color': '#d61f26',
                  ':hover': {
                    'background-color': '#c11c22'
                  },
                  ':focus': {
                    'background-color': '#c11c22'
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
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '350px',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '300px',
          position: 'relative',
          marginBottom: '16px',
          overflow: 'hidden',
          borderRadius: '4px',
        }}
      >
        <Image
          src={mainImage}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <h3
        style={{
          fontSize: '20px',
          fontWeight: 600,
          marginBottom: '8px',
          color: '#333',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '12px',
          lineHeight: '1.5',
        }}
      >
        {description}
      </p>

      <p
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#d61f26',
          marginBottom: '16px',
        }}
      >
        {price}
      </p>

      <div
        id={`product-component-${id}`}
        ref={buttonContainerRef}
      ></div>
    </div>
  );
}
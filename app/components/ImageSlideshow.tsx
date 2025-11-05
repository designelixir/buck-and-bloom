'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSlideshowProps {
  images: string[];
  title: string;
}

export default function ImageSlideshow({ images, title }: ImageSlideshowProps) {
  // Filter out undefined/null images early
  const validImages = images.filter(img => img);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkArrows = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkArrows();
    window.addEventListener('resize', checkArrows);
    return () => window.removeEventListener('resize', checkArrows);
  }, [validImages]);

  const handleImageClick = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const imageElements = container.querySelectorAll('.slideshow-item');
    const targetImage = imageElements[index] as HTMLElement;

    if (targetImage) {
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const imageElements = Array.from(container.querySelectorAll('.slideshow-item')) as HTMLElement[];
    const containerLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    if (direction === 'right') {
      // Find the first image that's mostly off screen to the right
      const nextImage = imageElements.find(img => {
        const imgLeft = img.offsetLeft;
        return imgLeft > containerLeft + containerWidth - 100;
      });

      if (nextImage) {
        container.scrollTo({
          left: nextImage.offsetLeft,
          behavior: 'smooth'
        });
      }
    } else {
      // Find the first image that's mostly off screen to the left
      const prevImage = [...imageElements].reverse().find(img => {
        const imgLeft = img.offsetLeft;
        return imgLeft < containerLeft - 100;
      });

      if (prevImage) {
        container.scrollTo({
          left: prevImage.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const isVideo = (src: string) => {
    if (!src) return false;
    return src.endsWith('.mp4') || src.endsWith('.mov') || src.endsWith('.webm');
  };

  return (
    <div className="flex-center-center flex-column image-slideshow-container">
        
        <div ref={scrollContainerRef} onScroll={checkArrows} className="image-slideshow-inner" >
            {validImages.map((src, index) => (
            <div key={index} className="slideshow-item" onClick={() => handleImageClick(index)} >
                {isVideo(src) ? (
                <video
                    src={src}
                    controls
                    className="product-page-image"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    }}
                />
                ) : (
                <Image src={src} alt={`${title} ${index + 1}`} width={800} height={500} className="product-page-image" />
                )}
            </div>
            ))}
        </div>
        <p className="centered-text image-slideshow-description"><i>Swipe to see additional photos and videos.</i></p>
        <div className="flex-center-center image-slideshow-buttons-container">
            <button onClick={() => handleArrowClick('left')} className="image-slideshow-nav-button" aria-label="Previous image" style={{ opacity: showLeftArrow ? 1 : 0.5 }} > ← </button>
            <button onClick={() => handleArrowClick('right')} className="image-slideshow-nav-button" aria-label="Next image" style={{ opacity: showRightArrow ? 1 : 0.5 }} > → </button>
        </div>
    </div>
  );
}
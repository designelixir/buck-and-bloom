'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

interface AnnouncementBarProps {
  href: string;
  message: string;
}

export default function AnnouncementBar({
  href,
  message,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      // Set to auto to get natural height
      barRef.current.style.height = 'auto';
      const naturalHeight = barRef.current.scrollHeight;
      
      // Animate from 0 to natural height on initial load
      gsap.fromTo(
        barRef.current,
        { height: 0 },
        {
          height: naturalHeight,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (barRef.current) {
      gsap.to(barRef.current, {
        height: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => setIsVisible(false),
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div ref={barRef} className="announcement-bar-container flex-start-start no-flex-grow" >
        <div className="flex-center-spacebetween no-flex-grow full-width announcement-bar-inner">
            <div style={{width: '75px'}}></div>
            <Link href={href} className=" no-link-styling " > <p className="no-text-spacing white-text centered-text">{message}</p> </Link>
            <button onClick={handleClose} className="close-button no-hover-grow" aria-label="Close announcement">&times;</button>
        </div>      
    </div>
  );
}
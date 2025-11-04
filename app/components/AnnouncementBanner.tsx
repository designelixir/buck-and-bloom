'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

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
          onComplete: () => {
            // ScrollTrigger to shrink from natural height to 0px as user scrolls 0-200px
            ScrollTrigger.create({
              trigger: document.documentElement,
              start: "top top",
              end: "200px top",
              scrub: true,
              onUpdate: (self) => {
                const barHeight = gsap.utils.mapRange(0, 1, naturalHeight, 0, self.progress);
                if (barRef.current) {
                  barRef.current.style.height = `${barHeight}px`;
                }
              },
            });
          }
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
            <Link href={href} className=" no-link-styling " > <p className="no-text-spacing white-text">{message}</p> </Link>
            <button onClick={handleClose} className="close-button no-hover-grow" aria-label="Close announcement">&times;</button>
        </div>      
    </div>
  );
}
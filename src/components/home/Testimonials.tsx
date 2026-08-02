"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Solid Space's transformed our vision into reality with exceptional design and quality work. Highly recommended!",
    name: "Sarah L.",
    role: "Homeowner",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Professional team, on-time delivery, and outstanding results. They exceeded our expectations!",
    name: "Michael R.",
    role: "Business Owner",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "From design to execution, every detail was handled with perfection. Truly a reliable partner.",
    name: "Priya S.",
    role: "Interior Design Client",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The craftsmanship and attention to detail in our villa project were simply world-class. Outstanding execution!",
    name: "David K.",
    role: "Villa Owner",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

// Duplicate items to ensure seamless infinite looping without jump gaps
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Slow motion auto-scroll loop (60 FPS animation frame)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const autoScroll = () => {
      if (!isHovered && scrollContainer) {
        // Increment scroll position smoothly (0.8px per frame)
        scrollContainer.scrollLeft += 0.8;

        // Infinite loop reset when reaching halfway
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="bg-[#FAF7F2] py-20 text-[#121820]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#C59B27] uppercase">
              TESTIMONIALS
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#121820] md:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="hidden gap-3 sm:flex">
            <button
              onClick={() => handleManualScroll("left")}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#121820]/20 bg-white text-[#121820] transition hover:border-[#C59B27] hover:bg-[#C59B27] hover:text-white shadow-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#121820]/20 bg-white text-[#121820] transition hover:border-[#C59B27] hover:bg-[#C59B27] hover:text-white shadow-sm"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Continuous Slow-Motion Scroll Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto py-2 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="group flex min-w-[320px] max-w-[360px] flex-none flex-col justify-between rounded-xl border border-[#E6DFD5] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#C59B27] hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1 text-[#C59B27]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-[#121820]/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3.5 border-t border-[#E6DFD5]/60 pt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-11 w-11 rounded-full border border-[#C59B27]/40 object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-[#121820]">{t.name}</p>
                  <p className="text-xs text-[#121820]/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

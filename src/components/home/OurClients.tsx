"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Landmark,
  Hotel,
  Castle,
  Home,
  Sparkles,
  Compass,
} from "lucide-react";

const clients = [
  { name: "Urban Living", icon: Building2, location: "Bhubaneswar" },
  { name: "Apex Builders", icon: Landmark, location: "Cuttack" },
  { name: "Skyline Estates", icon: Compass, location: "Puri" },
  { name: "Prestige Spaces", icon: Hotel, location: "Rourkela" },
  { name: "Nova Interiors", icon: Sparkles, location: "Bhubaneswar" },
  { name: "Grand Residency", icon: Home, location: "Sambalpur" },
  { name: "Opulent Homes", icon: Castle, location: "Bhubaneswar" },
];

// Duplicate items to ensure a seamless infinite scroll loop
const duplicatedClients = [...clients, ...clients, ...clients];

export default function OurClients() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth slow motion ticker (60 FPS animation loop)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += 0.7;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#FAF8F5] py-16 text-[#121820] border-y border-[#E6DFD5]/60"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#C59B27]" />
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#C59B27] uppercase">
              TRUSTED PARTNERS
            </p>
            <span className="h-[1px] w-6 bg-[#C59B27]" />
          </div>

          <h2 className="font-serif text-2xl font-bold text-[#121820] md:text-3xl">
            Our Esteemed{" "}
            <span className="font-serif italic font-normal text-[#C59B27]">
              Clients &amp; Partners
            </span>
          </h2>
        </div>

        {/* Continuous Slow-Motion Scroll Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto py-3 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {duplicatedClients.map(({ name, icon: Icon, location }, idx) => (
            <div
              key={idx}
              className="group flex min-w-[210px] max-w-[230px] flex-none items-center gap-3.5 rounded-xl border border-[#E6DFD5] bg-white px-5 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#C59B27] hover:shadow-[0_8px_25px_rgba(197,155,39,0.12)] hover:-translate-y-1"
            >
              {/* Lucide Icon Badge */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#C59B27]/30 bg-[#F5EAD4]/50 text-[#C59B27] transition-all duration-300 group-hover:bg-[#C59B27] group-hover:text-white">
                <Icon size={20} strokeWidth={1.5} />
              </div>

              {/* Client Name & City */}
              <div className="truncate">
                <h3 className="truncate font-serif text-xs font-bold text-[#121820] transition-colors duration-200 group-hover:text-[#C59B27]">
                  {name}
                </h3>
                <p className="text-[10px] font-medium text-[#121820]/50 tracking-wide mt-0.5">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

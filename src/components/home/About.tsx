import React from "react";
import { Package, Wallet, Headphones } from "lucide-react";

const badges = [
  {
    icon: Package,
    title: "Reasonable Prices",
    desc: "Quality design at affordable rates.",
  },
  {
    icon: Wallet,
    title: "Timely Project Delivery",
    desc: "On-time project completion.",
  },
  {
    icon: Headphones,
    title: "Professional Team",
    desc: "Expert architects, top results.",
  },
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "35+", label: "Awards Achieved" },
  { value: "99%", label: "Satisfied Customer" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF9F6] py-12 text-[#1C1917]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Top Feature Badges Row */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EAD4] border border-[#E2CE9F] text-[#9E731C] shadow-sm">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1C1917]">{title}</h4>
                <p className="text-[11px] text-[#78716C]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Metallic Frame 18 Experience Box */}
          <div className="flex justify-center lg:col-span-4 lg:justify-start">
            <div
              className="relative flex h-[340px] w-full max-w-[320px] flex-col items-center justify-center rounded-[36px] bg-white p-6 text-center shadow-lg transition-transform hover:scale-[1.01]"
              style={{
                boxShadow: "0 12px 36px rgba(197, 155, 39, 0.15)",
                border: "6px solid transparent",
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(135deg, #E2C085 0%, #8C6221 50%, #F3E0BD 100%) border-box",
              }}
            >
              {/* Huge '18' Number with Clipped Background Image */}
              <span
                className="font-serif text-[115px] font-black leading-none tracking-tight select-none"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                18
              </span>

              <p className="mt-1 font-serif text-lg font-semibold text-[#1C1917]">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Middle Column: Heading, Subtext, Stats, CEO Signature */}
          <div className="flex flex-col justify-center space-y-6 lg:col-span-5">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[2px] w-5 bg-[#C59B27]" />
                <p className="text-[11px] font-bold tracking-[0.25em] text-[#C59B27] uppercase">
                  ABOUT US
                </p>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.25] text-[#1C1917] md:text-4xl">
                Turning{" "}
                <span className="font-serif italic font-normal text-[#C59B27]">
                  Your Dream
                </span>
                <br />
                <span className="font-serif italic font-normal text-[#C59B27]">
                  Home
                </span>{" "}
                into Reality
              </h2>

              <p className="mt-4 text-xs leading-relaxed text-[#57534E] max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            {/* Stats Counters */}
            <div className="flex flex-wrap items-center gap-10 pt-2 border-t border-[#E6DFD5]/60">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-[#1C1917]">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-[#78716C]">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Signature Block */}
            <div className="pt-2">
              <p
                className="text-3xl text-[#292524] select-none"
                style={{
                  fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
                }}
              >
                Jimmy Alexander
              </p>
              <p className="text-[11px] text-[#78716C]">
                Jimmy Alexander – CEO
              </p>
            </div>
          </div>

          {/* Right Column: Hero Room Image with Soft Blend */}
          <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-2xl lg:col-span-3">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#FAF9F6] via-transparent to-transparent opacity-80 hidden lg:block" />
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

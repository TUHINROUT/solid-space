import React from "react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understanding your vision and core requirements.",
  },
  {
    num: "02",
    title: "Planning & Design",
    desc: "Conceptualizing 3D models and precise blueprints.",
  },
  {
    num: "03",
    title: "Construction",
    desc: "Master craftsmanship execution under strict supervision.",
  },
  {
    num: "04",
    title: "Finishing Touches",
    desc: "Precision detailing that brings true luxury to life.",
  },
  {
    num: "05",
    title: "Handover",
    desc: "Delivering perfection beyond client expectations.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#070D14] py-24 text-white"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-[#C59B27]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#C59B27]" />
              <p className="text-[11px] font-bold tracking-[0.3em] text-[#C59B27] uppercase">
                OUR PROCESS
              </p>
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
              Building Excellence{" "}
              <span className="font-serif italic font-normal text-[#D4AF37]">
                Step by Step
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-gray-400 md:text-sm">
            We follow an end-to-end transparent workflow ensuring your space
            transition is seamless from conceptual sketches to the final reveal.
          </p>
        </div>

        {/* Timeline Stepper Area */}
        <div className="relative">
          {/* Desktop Glow Line */}
          <div className="absolute left-8 right-8 top-8 hidden h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/50 to-transparent sm:block" />

          {/* Mobile Vertical Glow Line */}
          <div className="absolute bottom-6 left-8 top-8 block w-[2px] bg-gradient-to-b from-[#C59B27]/60 via-[#C59B27]/20 to-transparent sm:hidden" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
            {steps.map((s, index) => (
              <div
                key={s.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#C59B27]/50 hover:bg-white/[0.05] hover:shadow-[0_10px_30px_rgba(197,155,39,0.12)]"
              >
                {/* Number Badge */}
                <div className="z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C59B27]/40 bg-[#070D14] font-serif text-sm font-bold text-[#D4AF37] shadow-md transition-all duration-500 group-hover:border-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-black group-hover:shadow-[0_0_15px_rgba(197,155,39,0.5)]">
                  {s.num}
                </div>

                {/* Text Details */}
                <div>
                  <h3 className="font-serif text-base font-bold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                    {s.desc}
                  </p>
                </div>

                {/* Subtle Bottom Gold Accent Line */}
                <div className="mt-6 h-[1px] w-0 bg-gradient-to-r from-[#C59B27] to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Home,
  Building2,
  Armchair,
  Paintbrush,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Home, title: "Residential\nConstruction" },
  { icon: Building2, title: "Commercial\nConstruction" },
  { icon: Armchair, title: "Interior\nDesign" },
  { icon: Paintbrush, title: "Renovation &\nRemodeling" },
  { icon: ClipboardCheck, title: "Project\nManagement" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FAF7F2] py-20 text-[#121820]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Text Block */}
          <div className="max-w-xs shrink-0">
            <p className="mb-4 text-[11px] font-bold tracking-[0.25em] text-[#C59B27] uppercase">
              OUR SERVICES
            </p>
            <h2 className="font-serif text-3xl font-bold leading-[1.25] text-[#121820] md:text-4xl">
              Comprehensive
              <br />
              Construction &amp; Interior{" "}
              <span className="block text-[#C59B27]">Solutions</span>
            </h2>
            <p className="mt-6 text-xs leading-relaxed text-[#121820]/70">
              We provide end-to-end services tailored to your needs, ensuring
              every detail is crafted to perfection.
            </p>
          </div>

          {/* Right Cards Row */}
          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {services.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group flex min-h-[260px] flex-col justify-between rounded-xl border border-[#E6DFD5] bg-[#FAF7F2]/60 p-6 transition-all duration-300 hover:border-[#C59B27]/50 hover:bg-white hover:shadow-lg"
              >
                {/* Top Icon */}
                <div className="flex items-center justify-start pt-2">
                  <Icon
                    className="text-[#C59B27]"
                    size={42}
                    strokeWidth={1.2}
                  />
                </div>

                {/* Bottom Text & Button */}
                <div className="space-y-6">
                  <p className="whitespace-pre-line text-sm font-bold leading-snug text-[#121820]">
                    {title}
                  </p>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C59B27]/40 text-[#C59B27] transition-all duration-300 group-hover:border-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-white">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

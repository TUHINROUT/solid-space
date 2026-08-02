import { ShieldCheck, Award, Clock, Users } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Skilled architects, engineers & designers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "We use top-grade materials and best practices.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Committed to delivering projects on schedule.",
  },
  {
    icon: Award,
    title: "Client Focused",
    desc: "Your vision is our priority, always.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#FAF7F2] py-20 text-[#121820]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <p className="mb-2 text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#121820] md:text-4xl">
            Excellence in Every <span className="text-[#C59B27]">Detail</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col justify-between rounded-xl border border-[#E6DFD5] bg-[#FAF7F2]/60 p-6 transition-all duration-300 hover:border-[#C59B27]/50 hover:bg-white hover:shadow-lg"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#C59B27]/30 bg-[#C59B27]/10 text-[#C59B27] transition-all duration-300 group-hover:bg-[#C59B27] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h3 className="font-serif text-lg font-bold text-[#121820]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#121820]/70">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

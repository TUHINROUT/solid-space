import { Building, Award, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Building, value: "150+", label: "Projects Completed" },
  { icon: Clock, value: "10+", label: "Years of Experience" },
  { icon: Award, value: "50+", label: "Expert Professionals" },
  { icon: CheckCircle, value: "100%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0A121A] text-white"
    >
      {/* Background Image & Soft Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070D14] via-[#070D14]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070D14]/80 via-transparent to-[#070D14]/90" />

      {/* Hero Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-12 md:pt-44">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#D4AF37]">
            WE BUILD YOUR DREAMS
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
            Building Spaces.
            <br />
            <span className="text-[#C59B27]">Creating Legacies.</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-gray-300 md:text-base">
            From concept to creation, we deliver exceptional construction and
            interior solutions that blend creativity, quality, and
            functionality.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-md bg-[#C59B27] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#b0881f]"
            >
              Get a Free Quote <span aria-hidden>→</span>
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-md border border-white/30 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore Projects <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Floating Glassmorphism Stats Bar */}
        <div className="mt-16 max-w-3xl rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 ${
                  index !== stats.length - 1
                    ? "sm:border-r sm:border-white/10"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{value}</p>
                  <p className="text-[11px] text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

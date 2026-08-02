import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Modern Family Home",
    category: "Residential Construction",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Downtown Office Tower",
    category: "Commercial Construction",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Luxury Apartment",
    category: "Interior Design",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Retail Space Renovation",
    category: "Renovation",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-navy-dark py-20 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold">OUR WORK</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Featured Projects</h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold sm:flex"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-display text-lg font-semibold">{p.title}</p>
                <p className="text-xs text-white/60">{p.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

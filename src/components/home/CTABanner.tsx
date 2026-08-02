import { Phone, Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="bg-navy-dark pb-20 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 overflow-hidden rounded-lg lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-center gap-6 bg-navy p-8 md:p-12">
            <div>
              <h3 className="font-display text-2xl font-bold leading-snug md:text-3xl">
                Ready to bring your dream project to life?
              </h3>
              <p className="mt-3 text-sm text-white/60">
                Let&apos;s discuss your ideas and create something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-xs text-white/50">Call Us</p>
                  <p className="text-sm font-medium">+91 12345 67890</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-xs text-white/50">Email Us</p>
                  <p className="text-sm font-medium">info@solidspaces.com</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-navy-dark transition hover:bg-gold-light"
            >
              Get a Free Consultation →
            </a>
          </div>

          <div
            className="min-h-[280px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
        </div>
      </div>
    </section>
  );
}

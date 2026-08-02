import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 10h4v10H5V10Zm6 0h3.84v1.37h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V20H19.6v-4.06c0-.97-.02-2.22-1.35-2.22-1.36 0-1.57 1.06-1.57 2.15V20H11.9V10Z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 12s0-3.6-.46-5.3a2.9 2.9 0 0 0-2-2C18.9 4.2 12 4.2 12 4.2s-6.9 0-8.54.5a2.9 2.9 0 0 0-2 2C1 8.4 1 12 1 12s0 3.6.46 5.3a2.9 2.9 0 0 0 2 2c1.64.5 8.54.5 8.54.5s6.9 0 8.54-.5a2.9 2.9 0 0 0 2-2C23 15.6 23 12 23 12ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

const services = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Design",
  "Renovation & Remodeling",
  "Project Management",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070D14] text-white">
      {/* Background Architectural Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070D14] via-[#070D14]/90 to-[#070D14]/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Info & Logo */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src="/solid_space.png"
                alt="Solid Space's Interior Design Logo"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="mt-5 text-xs leading-relaxed text-gray-400">
              We are a premier construction and interior design firm delivering
              innovative, luxury, and sustainable spatial solutions tailored to
              your lifestyle.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:border-[#C59B27] hover:bg-[#C59B27] hover:text-black hover:shadow-[0_0_12px_rgba(197,155,39,0.3)]"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-serif text-base font-bold text-white flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#C59B27]" /> Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors duration-200 hover:text-[#D4AF37]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-serif text-base font-bold text-white flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#C59B27]" /> Services
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="transition-colors duration-200 hover:text-[#D4AF37]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-6 font-serif text-base font-bold text-white flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#C59B27]" /> Contact Us
            </h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#C59B27]" />
                <span>123, Builders Street, Bhubaneswar, Odisha 751001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#C59B27]" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-white transition-colors"
                >
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#C59B27]" />
                <a
                  href="mailto:info@solidspaces.com"
                  className="hover:text-white transition-colors"
                >
                  info@solidspaces.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] text-gray-400 md:flex-row">
          <p>© 2026 Solid Space&apos;s Interior Design. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-[#D4AF37]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#D4AF37]">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

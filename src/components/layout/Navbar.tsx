"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/solid_space.png"
            alt="Solid Space's Interior Design Logo"
            className="h-15 md:h-15 w-auto object-contain transition-all duration-300"
          />
        </a>
        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  link.label === "Home"
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-navy-dark transition hover:bg-gold-light lg:flex"
        >
          Get a Free Quote <span aria-hidden>→</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-6 rounded-md bg-navy-dark/95 p-6 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/90 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 inline-block rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-navy-dark"
              >
                Get a Free Quote →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { to: "/#hero", label: "Home" },
  { to: "/#services", label: "Services" },
  { to: "/#why-jlj", label: "About Us" },
  { to: "/#service-areas", label: "Service Areas" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/#hero" className="flex-shrink-0 py-2">
          <img
            src="/logo.jpg"
            alt="JLJ Commercial Cleaning Services"
            className="h-[130px] w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-lime transition-colors duration-200 rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+17867704110"
            className="flex items-center gap-1.5 text-sm text-white/90 hover:text-lime transition-colors"
          >
            <Phone className="w-4 h-4 text-lime" />
            <span>(786) 770-4110</span>
          </a>
          <a
            href="/#quote"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-navy bg-lime hover:bg-lime-dark rounded-lg transition-all duration-200 shadow-lg shadow-lime/25 hover:shadow-lime/40 hover:scale-105"
          >
            Get My Free Quote
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-lime transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-white/80 hover:text-lime hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+17867704110"
                className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-lime transition-colors"
              >
                <Phone className="w-4 h-4 text-lime" />
                (786) 770-4110
              </a>
              <a
                href="/#quote"
                onClick={() => setMenuOpen(false)}
                className="mx-3 text-center px-5 py-3 text-sm font-semibold text-navy bg-lime hover:bg-lime-dark rounded-lg transition-all"
              >
                Get My Free Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

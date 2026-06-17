import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const SERVICE_LINKS = [
  { to: "/#services", label: "Residential Cleaning" },
  { to: "/#services", label: "Apartment Turnover" },
  { to: "/#services", label: "Move-In / Move-Out" },
  { to: "/#services", label: "Post-Construction" },
  { to: "/#services", label: "Recurring Cleaning" },
  { to: "/#services", label: "Pressure Washing" },
  { to: "/#services", label: "Valet Trash" },
  { to: "/#services", label: "Office & Commercial" },
];

const COMPANY_LINKS = [
  { to: "/#why-jlj", label: "About Us" },
  { to: "/#service-areas", label: "Service Areas" },
  { to: "/#quote", label: "Contact" },
  { to: "/#quote", label: "Get a Free Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/#hero" className="inline-block mb-4">
              <img
                src="/logo.jpg"
                alt="JLJ Commercial Cleaning Services"
                className="h-[130px] w-auto"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-xs">
              South Florida's Standard for Clean. Trusted by property managers, homeowners, and contractors across Miami-Dade and Broward.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/JLJCommercialCleaningServices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-lime hover:text-navy transition-all duration-200"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/JLJCommercialCleaningServices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-lime hover:text-navy transition-all duration-200"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-lime mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="text-white/55 hover:text-lime text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-lime mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="text-white/55 hover:text-lime text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-lime mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17867704110"
                  className="flex items-start gap-3 text-white/55 hover:text-lime text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" />
                  <span>(786) 770-4110</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jljcommercialcleaning@gmail.com"
                  className="flex items-start gap-3 text-white/55 hover:text-lime text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" />
                  <span>jljcommercialcleaning@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <MapPin className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" />
                <span>Miami-Dade & Broward Counties, FL</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} JLJ Commercial Cleaning Services. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <Shield className="w-3.5 h-3.5 text-lime" />
            Licensed & Insured — Serving South Florida
          </div>
        </div>
      </div>
    </footer>
  );
}

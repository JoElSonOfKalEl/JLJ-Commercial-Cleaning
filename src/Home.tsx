import { useState } from "react";
import { Shield, Star, Clock, Users, Sparkles, Building2, MapPin, Phone, Mail, Check } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhoWeServe />
      <WhyChooseUs />
      <ServiceAreas />
      <QuoteForm />
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy scroll-mt-0">
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.ls-assets.com/provider/istock/2204739663.jpg?w=1920"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-10 z-0 opacity-10">
        <Sparkles className="w-96 h-96 text-lime" />
      </div>
      <div className="absolute -bottom-10 -left-10 z-0 opacity-5">
        <Building2 className="w-80 h-80 text-sky" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <div className="flex items-center gap-1 text-lime">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-white/80 font-medium">5-Star Rated in South Florida</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight font-heading">
            South Florida's{" "}
            <span className="text-lime">Standard for Clean</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mt-6 max-w-xl leading-relaxed">
            Trusted by property managers, homeowners, and contractors across Miami-Dade and Broward.
            Licensed, insured, and relentless about getting every surface spotless — on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-navy bg-lime hover:bg-lime-dark rounded-xl transition-all duration-200 shadow-xl shadow-lime/30 hover:shadow-lime/50 hover:scale-105"
            >
              Get My Free Quote
              <span className="text-sm opacity-70">→</span>
            </a>
            <a
              href="tel:+17869999999"
              className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-white/90 hover:text-lime rounded-xl transition-colors duration-200"
            >
              Or call (786) 999-9999
            </a>
          </div>

          <p className="text-sm text-white/40 mt-4">
            Free, no-obligation quote. Response within 24 hours.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Clock, text: "Same-Week Availability" },
              { icon: Users, text: "200+ Happy Clients" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/60">
                <item.icon className="w-5 h-5 text-lime/80" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

const SERVICES = [
  {
    title: "Residential Cleaning",
    desc: "Thorough home cleaning tailored to your schedule. From deep cleans to regular upkeep, we keep your home spotless and fresh.",
  },
  {
    title: "Apartment Turnover",
    desc: "Rapid unit turnovers between tenants. We help property managers minimize vacancy with fast, reliable, detailed cleaning.",
  },
  {
    title: "Move-In / Move-Out",
    desc: "Comprehensive cleaning that protects security deposits and impresses new tenants. Every corner, every surface, every time.",
  },
  {
    title: "Post-Construction",
    desc: "Dust and debris elimination after renovations or new builds. We get project sites client-ready on schedule.",
  },
  {
    title: "Recurring Cleaning",
    desc: "Weekly, bi-weekly, or monthly cleaning contracts. Consistent quality you can count on for homes and offices.",
  },
  {
    title: "Pressure Washing",
    desc: "Driveways, sidewalks, building exteriors, and parking lots restored to like-new condition with professional-grade equipment.",
  },
  {
    title: "Valet Trash",
    desc: "Doorstep trash collection for apartment complexes and multi-unit properties. Cleaner communities, happier residents.",
  },
  {
    title: "Office & Commercial",
    desc: "After-hours and weekend cleaning for offices and commercial spaces. Professional teams, flexible scheduling.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white scroll-mt-40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lime font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 leading-tight">
            Everything Your Property Needs,{" "}
            <span className="text-lime">All In One Place</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            From a single deep clean to ongoing multi-property contracts — we handle it all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-lime/30 hover:shadow-xl hover:shadow-lime/5 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-navy group-hover:text-lime transition-colors">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/#quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-navy bg-lime hover:bg-lime-dark rounded-xl transition-all duration-200 shadow-lg shadow-lime/25"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const audiences = [
    {
      image: "https://assets.ls-assets.com/provider/istock/2273701842.jpg?w=768",
      alt: "Professional cleaner in office building hallway",
      title: "Property Managers",
      desc: "Keep your properties tenant-ready with fast, reliable turnover cleaning. We work around your schedule and handle the details so you don't have to.",
    },
    {
      image: "https://assets.ls-assets.com/provider/istock/2203738391.jpg?w=768",
      alt: "Professional janitor cleaning office floor",
      title: "Homeowners",
      desc: "Enjoy a spotless home without lifting a finger. One-time deep cleans or recurring service — we treat your home like our own.",
    },
    {
      image: "https://assets.ls-assets.com/provider/istock/2209183075.jpg?w=768",
      alt: "Professional cleaner mopping hotel floor",
      title: "Contractors",
      desc: "We handle post-construction cleanup so you can hand over a pristine finished project. On time, on budget, every time.",
    },
    {
      image: "https://assets.ls-assets.com/provider/istock/2265080082.jpg?w=768",
      alt: "Cleaners organizing modern office workspace",
      title: "Business Offices",
      desc: "Professional after-hours cleaning that keeps your workspace fresh, healthy, and ready for business. Flexible schedules, consistent results.",
    },
  ];

  return (
    <section id="who-we-serve" className="py-20 md:py-28 bg-gray-50 scroll-mt-40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lime font-semibold text-sm uppercase tracking-widest">Who We Serve</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 leading-tight">
            Built for South Florida's{" "}
            <span className="text-lime">Busiest Professionals</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Every client gets the same commitment: show up on time, clean relentlessly, leave no trace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud) => (
            <div key={aud.title} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={aud.image}
                  alt={aud.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{aud.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{aud.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      desc: "Fully licensed and insured for your peace of mind. We carry comprehensive coverage so you're always protected.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "Same-week availability for most jobs. We respect your timeline and show up when we say we will — guaranteed.",
    },
    {
      icon: Building2,
      title: "South Florida Local",
      desc: "Based right here in Miami-Dade. We know the market, understand local expectations, and are always nearby.",
    },
    {
      icon: Sparkles,
      title: "Relentless Quality",
      desc: "Every surface, every corner, every time. We don't cut corners — we clean them. 200+ clients trust us for a reason.",
    },
  ];

  return (
    <section id="why-jlj" className="py-20 md:py-28 bg-white scroll-mt-40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://assets.ls-assets.com/provider/istock/2204739695.jpg?w=768"
                alt="Professional cleaners showing thumbs up with cleaning products"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-lime text-navy rounded-2xl px-6 py-4 shadow-xl hidden md:block">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm font-semibold opacity-80">Happy Clients</div>
            </div>
          </div>

          <div>
            <span className="text-lime font-semibold text-sm uppercase tracking-widest">Why Choose JLJ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 leading-tight">
              More Than Just Clean —{" "}
              <span className="text-lime">It's Peace of Mind</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg leading-relaxed">
              We built this company to give South Florida property owners and managers something they couldn't find: a cleaning partner who shows up on time, works relentlessly, and delivers consistent quality — every single visit.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-lime/20 transition-colors">
                  <r.icon className="w-6 h-6 text-lime mb-3" />
                  <h4 className="font-semibold text-navy">{r.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const counties = [
    {
      name: "Miami-Dade County",
      cities: ["Miami", "Miami Beach", "Hialeah", "Coral Gables", "Doral", "Kendall", "Homestead", "Aventura", "North Miami", "South Miami"],
    },
    {
      name: "Broward County",
      cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Davie", "Plantation", "Sunrise", "Coral Springs", "Pompano Beach", "Weston"],
    },
  ];

  return (
    <section id="service-areas" className="py-20 md:py-28 bg-navy relative overflow-hidden scroll-mt-40">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white/20" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-lime font-semibold text-sm uppercase tracking-widest">Service Areas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Proudly Serving{" "}
            <span className="text-lime">Miami-Dade & Broward</span>
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            From Homestead to Pompano Beach — if you're in South Florida, we're in your neighborhood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {counties.map((county) => (
            <div key={county.name} className="bg-white/5 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/10 hover:border-lime/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">{county.name}</h3>
              <div className="flex flex-wrap gap-2">
                {county.cities.map((city) => (
                  <span key={city} className="px-3 py-1 text-sm text-white/70 bg-white/10 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/50 text-sm mb-4">
            Don't see your city? We likely serve it — reach out and ask.
          </p>
          <a
            href="/#quote"
            className="inline-flex items-center gap-2 text-lime hover:text-lime-dark font-medium transition-colors"
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <section id="quote" className="py-20 md:py-28 bg-gray-50 scroll-mt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:col-span-2 bg-navy p-8 md:p-10 flex flex-col justify-between text-center lg:text-left">
              <div>
                <span className="text-lime font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 leading-tight">
                  Ready for a{" "}
                  <span className="text-lime">Spotless Space?</span>
                </h2>
                <p className="text-white/60 mt-3 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                  Fill out the form and we'll get back to you within 24 hours with a free, no-obligation quote.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { icon: Phone, text: "(786) 999-9999", href: "tel:+17869999999" },
                    { icon: Mail, text: "info@jljycleaning.com", href: "mailto:info@jljycleaning.com" },
                    { icon: MapPin, text: "Miami-Dade & Broward, FL" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 justify-center lg:justify-start">
                      <item.icon className="w-5 h-5 text-lime mt-0.5 flex-shrink-0" />
                      {item.href ? (
                        <a href={item.href} className="text-white/70 hover:text-lime text-sm transition-colors">
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm">{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 justify-center lg:justify-start text-white/50 text-xs">
                  <Shield className="w-4 h-4 text-lime" />
                  Licensed & Insured — Your property is protected
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white p-8 md:p-10 flex flex-col items-center lg:items-start">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-lime/10 rounded-full flex items-center justify-center mb-5">
                    <Check className="w-8 h-8 text-lime" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
                  <p className="text-gray-500 mt-2 max-w-sm">
                    Your quote request has been received. We'll get back to you within 24 hours with a free estimate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 w-full">
                  {/* Web3Forms config — replace YOUR_ACCESS_KEY with key from web3forms.com */}
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
                  <input type="hidden" name="subject" value="New Quote Request - JLJ Commercial Cleaning" />
                  <input type="hidden" name="from_name" value="JLJ Cleaning Website" />
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(305) 555-0123"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="customer_type" className="block text-sm font-medium text-navy mb-1.5">
                      I am a...
                    </label>
                    <select
                      id="customer_type"
                      name="customer_type"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime transition-all text-gray-500"
                    >
                      <option value="">Select customer type</option>
                      <option value="property_manager">Property Manager</option>
                      <option value="homeowner">Homeowner</option>
                      <option value="contractor">Contractor</option>
                      <option value="business">Business Owner</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime transition-all text-gray-500"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="apartment_turnover">Apartment Turnover</option>
                      <option value="move_in_out">Move-In / Move-Out</option>
                      <option value="post_construction">Post-Construction</option>
                      <option value="recurring">Recurring Cleaning</option>
                      <option value="pressure_washing">Pressure Washing</option>
                      <option value="valet_trash">Valet Trash</option>
                      <option value="commercial">Office & Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Briefly describe what you need — property size, timeline, frequency, etc."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 text-base font-semibold text-navy bg-lime hover:bg-lime-dark rounded-xl transition-all duration-200 shadow-lg shadow-lime/25 hover:shadow-lime/40 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Get My Free Quote"}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy. Your info will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

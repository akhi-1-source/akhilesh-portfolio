import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../types/portfolio";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(5,5,20,0.85) 0%, rgba(8,8,30,0.9) 100%)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(112,180,255,0.12)" : "none",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.4), 0 0 20px rgba(112,180,255,0.08)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.logo.link"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
              style={{
                background:
                  "linear-gradient(135deg, rgba(112,180,255,0.3), rgba(191,57,204,0.3))",
                border: "1px solid rgba(112,180,255,0.4)",
                boxShadow: "0 0 15px rgba(112,180,255,0.3)",
                color: "rgba(180,220,255,0.9)",
              }}
            >
              AG
            </div>
            <span
              className="font-display font-bold text-sm tracking-widest uppercase"
              style={{
                color: "rgba(180,220,255,0.9)",
                textShadow: "0 0 10px rgba(112,180,255,0.4)",
              }}
            >
              Akhilesh Gusain
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.link`}
                  className="px-3 py-1.5 rounded-lg text-xs font-display font-medium tracking-wide transition-all duration-300"
                  style={{
                    color: isActive
                      ? "rgba(112,180,255,1)"
                      : "rgba(180,200,230,0.7)",
                    background: isActive
                      ? "rgba(112,180,255,0.12)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(112,180,255,0.25)"
                      : "1px solid transparent",
                    textShadow: isActive
                      ? "0 0 8px rgba(112,180,255,0.5)"
                      : "none",
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg border border-white/10 transition-smooth"
            style={{
              background: "rgba(112,180,255,0.08)",
              color: "rgba(180,220,255,0.9)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.hamburger.toggle"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(5,5,20,0.95) 0%, rgba(10,8,35,0.98) 100%)",
              borderBottom: "1px solid rgba(112,180,255,0.12)",
              backdropFilter: "blur(20px)",
            }}
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => {
                      scrollToSection(link.href);
                      setMobileOpen(false);
                    }}
                    data-ocid={`nav.mobile.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.link`}
                    className="px-4 py-2.5 rounded-lg text-sm font-display font-medium transition-all duration-300 text-left"
                    style={{
                      color: isActive
                        ? "rgba(112,180,255,1)"
                        : "rgba(180,200,230,0.7)",
                      background: isActive
                        ? "rgba(112,180,255,0.12)"
                        : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

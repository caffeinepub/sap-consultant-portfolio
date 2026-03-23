import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "oklch(var(--sap-shell))",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a
            href="#home"
            className="text-white font-semibold text-base tracking-wide"
            data-ocid="nav.link"
          >
            ABHINIT PPC ENGINEER
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors duration-150 px-3 py-1.5 rounded"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="ml-3 bg-sap-blue text-white hover:bg-sap-blue-light rounded px-5 text-sm font-semibold h-8"
              data-ocid="nav.primary_button"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: "oklch(var(--sap-shell))" }}
            className="lg:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium py-2 px-3 rounded transition-colors"
                  onClick={closeMobile}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="w-full mt-3 bg-sap-blue text-white hover:bg-sap-blue-light rounded font-semibold"
                onClick={() => {
                  closeMobile();
                  window.location.href = "#contact";
                }}
                data-ocid="nav.primary_button"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

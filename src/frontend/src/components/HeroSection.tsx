import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const specialties = [
  "Production Planning & Control – MRP, BOM, Routing & Production Orders",
  "SAP PP – Demand Management, Capacity Planning & Shop Floor Control",
  "SAP MM – Procurement, Inventory & Vendor Management",
  "SAP S/4HANA Configuration & Implementation",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ backgroundColor: "oklch(var(--sap-blue))" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-sans leading-tight">
              <span
                className="shimmer-text font-bold"
                style={{
                  fontSize: "clamp(3rem, 7vw, 5rem)",
                  display: "block",
                  letterSpacing: "0.04em",
                }}
              >
                ABHINIT
              </span>
              <span
                className="block font-semibold mt-1"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  letterSpacing: "0.12em",
                  color: "oklch(var(--foreground))",
                }}
              >
                PPC ENGINEER
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Production Planning &amp; Control Specialist with 10+ years of
              cross-industry experience in SAP PP, MRP, BOM, and end-to-end
              manufacturing process optimization.
            </p>

            <ul className="space-y-3">
              {specialties.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "oklch(var(--foreground) / 0.75)" }}
                >
                  <CheckCircle
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: "oklch(var(--sap-blue))" }}
                  />
                  {s}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded px-8 py-3 font-semibold text-base"
                data-ocid="hero.primary_button"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded px-8 py-3 font-semibold text-base"
                style={{
                  borderColor: "oklch(var(--sap-blue))",
                  color: "oklch(var(--sap-blue))",
                  backgroundColor: "transparent",
                }}
                data-ocid="hero.secondary_button"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo card */}
              <div
                className="relative rounded-lg w-72 lg:w-80 h-80 bg-card border overflow-hidden"
                style={{
                  borderColor: "oklch(var(--sap-blue) / 0.4)",
                  boxShadow: "0 4px 24px rgba(0,112,242,0.25)",
                }}
              >
                <img
                  src="/assets/uploads/WhatsApp-Image-2026-03-21-at-9.10.20-AM-1.jpeg"
                  alt="Abhinit"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Years chip */}
              <div
                className="absolute -bottom-6 -left-6 rounded-lg p-4 border"
                style={{
                  backgroundColor: "oklch(var(--sap-blue))",
                  borderColor: "oklch(var(--sap-blue))",
                }}
              >
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs font-medium text-white/85">
                  Years Experience
                </div>
              </div>

              {/* Projects chip */}
              <div
                className="absolute -top-4 -right-4 rounded-lg p-4 bg-card border"
                style={{
                  borderColor: "oklch(var(--sap-blue) / 0.3)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "oklch(var(--sap-blue))" }}
                >
                  3
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  PPC Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

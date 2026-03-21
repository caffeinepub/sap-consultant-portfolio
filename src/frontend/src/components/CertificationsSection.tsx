import { Award } from "lucide-react";
import { motion } from "motion/react";

const certs = [
  {
    title: "Diploma in Mechanical Engineering",
    subtitle: "Mechanical Engineering",
  },
  { title: "Diploma", subtitle: "SAP MM & Logistics" },
  { title: "SAP Certified", subtitle: "SAP PP (Production Planning)" },
];

export default function CertificationsSection() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-lg shadow-card p-8"
    >
      <div
        className="text-xs font-semibold uppercase tracking-widest mb-1"
        style={{ color: "oklch(var(--sap-blue))" }}
      >
        Credentials
      </div>
      <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
        Certifications & Education
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {certs.map((cert) => (
          <motion.div
            key={cert.subtitle}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 bg-background rounded-lg p-3 border border-border hover:border-primary/30 transition-colors duration-200"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "oklch(0.52 0.22 260 / 0.1)" }}
            >
              <Award size={18} style={{ color: "oklch(var(--sap-blue))" }} />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground leading-tight">
                {cert.title}
              </div>
              <div
                className="text-xs font-medium mt-0.5"
                style={{ color: "oklch(var(--sap-blue))" }}
              >
                {cert.subtitle}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

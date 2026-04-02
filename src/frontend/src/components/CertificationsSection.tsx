import { Award } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const certs = [
  {
    title: "Diploma in Mechanical Engineering",
    subtitle: "Mechanical Engineering",
    image: null,
    issuer: "",
    date: "",
  },
  {
    title: "Diploma",
    subtitle: "SAP MM & Logistics",
    image: null,
    issuer: "",
    date: "",
  },
  {
    title: "SAP PP Certified",
    subtitle: "The Fundamentals of SAP Production Planning (PP)",
    image:
      "/assets/uploads/alison_certificate-sap_pp_page-0001-019d1e19-35da-74bf-afc9-c41f12c79c3b-2.jpg",
    issuer: "Alison · CPD Certified",
    date: "20th March, 2026",
  },
  {
    title: "Document Control",
    subtitle: "Document Control: From Principles to Practice",
    image:
      "/assets/uploads/alison_certificate-5733-56714690_page-0001-019d1e19-358e-7751-b010-16e2f9ad053d-1.jpg",
    issuer: "Alison · CPD Certified",
    date: "23rd February, 2026",
  },
  {
    title: "Production Planning & Control in Industrial Engineering",
    subtitle: "Production Planning and Control in Industrial Engineering",
    image:
      "/assets/uploads/alison_certificate_production_planning_and_control_in_industrial_engineering_page-0001-019d1e68-c056-70ca-bbe5-b53f7a485ec8-1.jpg",
    issuer: "Alison · CPD Certified",
    date: "24th March, 2026",
  },
  {
    title: "Best Performer Employee",
    subtitle: "Certificate of Achievement — Elixrr Industries Private Limited",
    image:
      "/assets/img-20260330-wa0109.jpg-019d4c9a-891e-74ac-b370-43562c35fd16.jpeg",
    issuer: "Elixrr Industries Pvt. Ltd.",
    date: "30th March, 2026",
  },
];

function CertModal({
  cert,
  onClose,
}: { cert: (typeof certs)[0]; onClose: () => void }) {
  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 w-full h-full max-w-none m-0 border-none"
      aria-modal="true"
    >
      <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          aria-label="Close certificate"
        >
          ✕
        </button>
        <img src={cert.image!} alt={cert.subtitle} className="w-full h-auto" />
      </div>
    </dialog>
  );
}

export default function CertificationsSection() {
  const [selected, setSelected] = useState<(typeof certs)[0] | null>(null);

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
        {certs.map((cert) =>
          cert.image ? (
            <motion.button
              type="button"
              key={cert.subtitle}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-background rounded-lg border border-border transition-colors duration-200 cursor-pointer hover:border-primary/60 p-0 overflow-hidden w-full text-left"
              onClick={() => setSelected(cert)}
            >
              <div className="flex w-full gap-3 p-3">
                <div className="flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border border-border">
                  <img
                    src={cert.image}
                    alt={cert.subtitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-foreground leading-tight">
                    {cert.title}
                  </div>
                  <div
                    className="text-xs font-medium mt-0.5"
                    style={{ color: "oklch(var(--sap-blue))" }}
                  >
                    {cert.subtitle}
                  </div>
                  {cert.issuer && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {cert.issuer} · {cert.date}
                    </div>
                  )}
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(var(--sap-blue))" }}
                  >
                    Click to view certificate
                  </div>
                </div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key={cert.subtitle}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-background rounded-lg border border-border transition-colors duration-200 p-3 hover:border-primary/30"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.52 0.22 260 / 0.18)" }}
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
          ),
        )}
      </div>

      {selected && (
        <CertModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </motion.section>
  );
}

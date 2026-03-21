import { motion } from "motion/react";

const experiences = [
  {
    period: "2025 – Present",
    role: "Project Engineer",
    company: "Elixrr Industries",
    desc: "Leading SAP project implementation and engineering operations, driving process improvements and system configuration.",
  },
  {
    period: "2023 – 2025",
    role: "Engineer",
    company: "Greenply Industries Limited",
    desc: "SAP implementation support for MM and PP modules, including material master configuration, MRP setup, and production planning.",
  },
  {
    period: "2021 – 2023",
    role: "Operations Support",
    company: "Hero Motocorp Ltd.",
    desc: "SAP operations support for manufacturing processes, inventory management, and production planning coordination.",
  },
  {
    period: "2017 – 2021",
    role: "Technical Support",
    company: "National Petroleum Construction Company",
    desc: "Provided technical support for ERP systems and business process operations in a large-scale industrial environment.",
  },
  {
    period: "2015 – 2017",
    role: "Factory Supervisor",
    company: "Tanya Galvanizers",
    desc: "Supervised factory operations, managed production workflows, and coordinated supply chain activities.",
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
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
        Career
      </div>
      <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
        Work Experience
      </h2>
      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-0.5"
          style={{ backgroundColor: "oklch(var(--border))" }}
        />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-7 relative"
            >
              <div
                className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                style={{
                  borderColor: "oklch(var(--sap-blue))",
                  backgroundColor: "oklch(var(--sap-blue))",
                }}
              />
              <div className="text-xs text-muted-foreground font-medium mb-0.5">
                {exp.period}
              </div>
              <div className="font-semibold text-foreground text-sm">
                {exp.role}
              </div>
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: "oklch(var(--sap-blue))" }}
              >
                {exp.company}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {exp.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

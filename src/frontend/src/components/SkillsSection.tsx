import { motion } from "motion/react";

const skills = [
  {
    icon: "🏗️",
    title: "SAP S/4HANA",
    desc: "Configuration, implementation support, IMG settings, and migration planning.",
  },
  {
    icon: "📦",
    title: "SAP MM",
    desc: "P2P procurement, inventory management, vendor management, material master, pricing & invoice verification.",
  },
  {
    icon: "🔄",
    title: "SAP PP",
    desc: "Demand management, MRP, production orders, BOM, routing, and capacity planning.",
  },
  {
    icon: "📊",
    title: "SAP HANA",
    desc: "Real-time data processing, reporting, and performance optimization.",
  },
  {
    icon: "📈",
    title: "Power BI & Excel",
    desc: "Advanced data analytics, dashboards, and business reporting.",
  },
  {
    icon: "🔗",
    title: "SAP Integration",
    desc: "SD & FI module integration, SAP Fiori, LSMW, and basic ABAP debugging.",
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
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
        Expertise
      </div>
      <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
        SAP Skills & Expertise
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background border border-border rounded-lg p-4 hover:border-primary/40 transition-all duration-200 cursor-default"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3"
              style={{ backgroundColor: "oklch(0.52 0.22 260 / 0.08)" }}
            >
              {skill.icon}
            </div>
            <div className="font-semibold text-foreground text-sm mb-1">
              {skill.title}
            </div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              {skill.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

import { motion } from "motion/react";

const projects = [
  {
    title: "PPC Implementation – Hero Motocorp",
    company: "Hero Motocorp Ltd.",
    desc: "Production Planning & Control support for India's largest two-wheeler manufacturer. Managed MRP, production orders, BOM, routing, and capacity planning for large-scale automotive manufacturing operations.",
    tags: ["SAP PP", "MRP", "BOM", "Routing", "Operations"],
    badge: 1,
  },
  {
    title: "PPC & MM Support – Greenply Industries",
    company: "Greenply Industries Limited",
    desc: "SAP PP and MM implementation and support for a leading wood panel manufacturer. Configured material master, BOM, routing, and MRP processes to streamline production workflows and inventory management.",
    tags: ["SAP PP", "SAP MM", "BOM", "Routing", "MRP"],
    badge: 2,
  },
  {
    title: "PPC Project Engineering – Elixrr Industries",
    company: "Elixrr Industries",
    desc: "Leading ongoing Production Planning & Control project implementation as Project Engineer. Responsible for business process mapping, gap analysis, functional specifications, and go-live support using ASAP methodology.",
    tags: ["S/4HANA", "PPC", "Configuration", "ASAP", "Business Process"],
    badge: 3,
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
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
        Portfolio
      </div>
      <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
        Production Planning & Control Projects
      </h2>
      <div className="space-y-5">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start group"
            data-ocid={`projects.item.${project.badge}`}
          >
            <div
              className="w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 mt-1 text-white"
              style={{ backgroundColor: "oklch(var(--sap-blue))" }}
            >
              {project.badge}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-foreground text-sm leading-tight">
                {project.title}
              </div>
              <div
                className="text-xs font-medium mb-1"
                style={{ color: "oklch(var(--sap-blue))" }}
              >
                {project.company}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {project.desc}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded px-2 py-0.5 font-medium"
                    style={{
                      backgroundColor: "oklch(0.52 0.22 260 / 0.18)",
                      color: "oklch(var(--sap-blue-light))",
                      border: "1px solid oklch(0.52 0.22 260 / 0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

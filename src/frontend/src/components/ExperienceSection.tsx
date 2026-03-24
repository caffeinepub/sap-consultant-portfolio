import { motion } from "motion/react";

const experiences = [
  {
    period: "07/2025 – Present",
    role: "Project & PPC Engineer",
    company: "Elixrr Industries Private Limited",
    location: "Gwalior, IN",
    bullets: [
      "Coordinating with cross-functional teams for timely delivery, cost optimization, and quality assurance.",
      "Transitioning into a PPC Engineer role: production planning, SAP-based material management, and dispatch.",
      "Recognized for bridging project execution with long-term planning for operational efficiency.",
      "Releasing monthly, weekly, and daily plans for production activities.",
      "Coordinating production schedules with various departments.",
      "Managing the flow of materials and inventory levels in SAP.",
      "Coordination between production, SCM, QA, and the Feeder Shop to achieve the daily plan.",
      "Maintained project schedule by monitoring project progress, coordinating activities and resolving problems.",
      "Monitored work performance against established milestones ensuring adherence to approved schedules.",
    ],
  },
  {
    period: "10/2023 – 06/2025",
    role: "PPC Engineer",
    company: "Greenply Industries Ltd",
    location: "Vadodara, IN",
    bullets: [
      "Coordination between production, SCM, QA, and the Feeder Shop to achieve the daily plan.",
      "Managing the E-material flow (EMF) and Material Requirements Planning (MRP).",
      "Production scheduling in SAP.",
      "Ensuring optimum inventory levels of OE parts, as per class. Implementing engineering changes with zero non-moving absolution generation.",
      "Leading a team of sixty contractual laborers and four associates (ILS), assigning them tasks, monitoring their performance, and ensuring adequate training.",
      "Dispatch planning as per sales requirements.",
      "Coordinated production schedules based on demand forecasts and resource availability.",
      "Utilized ERP systems for tracking inventory levels and managing supply chain operations.",
      "Created and maintained production schedules to ensure on-time deliveries of products.",
      "Monitored inventory levels and forecasted future requirements for materials.",
    ],
  },
  {
    period: "01/2021 – 10/2023",
    role: "PPC Associate",
    company: "Hero Moto Corp Ltd.",
    location: "Vadodara, IN",
    bullets: [
      "Releasing monthly, weekly, and daily plans for production activities.",
      "Coordinating production schedules with various departments.",
      "Managing the flow of materials and inventory levels in SAP.",
      "Monitored industry trends to adjust strategies and stay competitive in the market.",
      "Provided training sessions on PPC best practices for other team members.",
      "Developed detailed project timelines to ensure timely completion of deliverables.",
    ],
  },
  {
    period: "07/2017 – 01/2019",
    role: "Instrument Technician",
    company: "Nation Petroleum Construction Company",
    location: "Mussafah IDC 10, United Arab Emirates",
    bullets: [
      "Calibrated and maintained instrumentation for oil and gas operations.",
      "Troubleshot equipment failures to minimize downtime during projects.",
      "Installed new instruments and ensured compliance with safety standards.",
      "Collaborated with engineers to optimize system performance and reliability.",
      "Conducted routine inspections and performed preventive maintenance on devices.",
      "Trained junior technicians on proper equipment managing and safety protocols.",
      "Performed maintenance and repairs on a variety of process control instrumentation including transmitters, controllers, valves, switches, recorders, and indicators.",
      "Adhered to safety and environmental requirements.",
    ],
  },
  {
    period: "07/2015 – 05/2017",
    role: "Factory Supervisor",
    company: "Tanya Galvanizers",
    location: "Vadodara, IN",
    bullets: [
      "Supervised daily production activities and ensured adherence to safety protocols.",
      "Coordinated workflow between departments to optimize production efficiency and output.",
      "Implemented process improvements to enhance productivity and reduce waste in operations.",
      "Managed inventory levels, ensuring timely availability of materials for production needs.",
      "Examined final products for conformance with quality and design standards.",
      "Organized project components according to workflow.",
    ],
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
        <div className="space-y-8">
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
                className="text-xs font-semibold mb-0.5"
                style={{ color: "oklch(var(--sap-blue))" }}
              >
                {exp.company}
              </div>
              <div className="text-xs text-muted-foreground mb-2">
                {exp.location}
              </div>
              <ul className="space-y-1">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-xs text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span
                      style={{ color: "oklch(var(--sap-blue))" }}
                      className="mt-0.5 shrink-0"
                    >
                      •
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

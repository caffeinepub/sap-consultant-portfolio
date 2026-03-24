import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-lg shadow-card p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-4">
          <div
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "oklch(var(--sap-blue))" }}
          >
            About
          </div>
          <h2 className="font-sans text-3xl font-bold text-foreground">
            About Abhinit
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Production Planning &amp; Control (PPC) Engineer with hands-on
            expertise in SAP PP and MM modules. Specializes in end-to-end
            production planning processes including demand management, MRP,
            production orders, BOM, routing, and capacity planning to optimize
            manufacturing operations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Skilled in SAP S/4HANA configuration, business process mapping, gap
            analysis, and functional specifications. Experienced in procurement
            (P2P), inventory management, vendor management, and invoice
            verification. Familiar with SAP Fiori, LSMW, Power BI, and advanced
            Excel analytics. Worked in Agile and ASAP methodology environments
            including incident handling and root cause analysis.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { value: "8+", label: "Years Experience" },
              { value: "3", label: "PPC Projects" },
              { value: "5", label: "Companies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-sans text-3xl font-bold"
                  style={{ color: "oklch(var(--sap-blue))" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="w-48 h-48 rounded-full border-4 overflow-hidden"
            style={{
              borderColor: "oklch(var(--sap-blue) / 0.5)",
              boxShadow: "0 0 0 4px oklch(0.52 0.22 260 / 0.1)",
            }}
          >
            <img
              src="/assets/uploads/WhatsApp-Image-2026-03-21-at-9.10.20-AM-1.jpeg"
              alt="Abhinit Upadhyay"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

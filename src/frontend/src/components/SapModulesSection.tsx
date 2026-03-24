import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const mmTopics = [
  "Procurement (P2P) Process",
  "Purchase Requisition & Purchase Order",
  "Material Master & Vendor Master",
  "Inventory Management (GR/GI)",
  "Invoice Verification (MIRO)",
  "Goods Receipt & Stock Transfer",
  "Pricing Conditions & Schema",
  "MRP Integration with MM",
];

const ppTopics = [
  "Demand Management & PIR",
  "Material Requirements Planning (MRP)",
  "Bill of Materials (BOM)",
  "Work Center & Routing",
  "Production Orders",
  "Capacity Planning",
  "Shop Floor Control",
  "Backflushing & Confirmations",
];

function ModuleCard({
  icon,
  title,
  topics,
  delay,
}: {
  icon: string;
  title: string;
  topics: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-card border rounded-xl p-6 flex flex-col gap-4"
      style={{ borderColor: "oklch(var(--sap-blue) / 0.5)" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ backgroundColor: "oklch(0.52 0.22 260 / 0.18)" }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground text-lg leading-tight">
            {title}
          </h3>
          <span
            className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1"
            style={{
              backgroundColor: "oklch(0.52 0.22 260 / 0.2)",
              color: "oklch(var(--sap-blue))",
            }}
          >
            Active Module
          </span>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-2">
        {topics.map((topic, i) => (
          <motion.li
            key={topic}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.05 * i }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <CheckCircle
              size={15}
              className="flex-shrink-0"
              style={{ color: "oklch(var(--sap-blue))" }}
            />
            {topic}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SapModulesSection() {
  return (
    <motion.section
      id="sap-modules"
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
        SAP Expertise
      </div>
      <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
        SAP MM &amp; SAP PP Modules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ModuleCard
          icon="📦"
          title="SAP MM – Materials Management"
          topics={mmTopics}
          delay={0.1}
        />
        <ModuleCard
          icon="🏭"
          title="SAP PP – Production Planning"
          topics={ppTopics}
          delay={0.2}
        />
      </div>
    </motion.section>
  );
}

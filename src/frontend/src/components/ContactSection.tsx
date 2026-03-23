import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/917091391375?text=${text}`, "_blank");
    toast.success("Opening WhatsApp to send your message!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
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
        Get In Touch
      </div>
      <h2 className="font-sans text-2xl font-bold text-foreground mb-2">
        Contact
      </h2>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
        Ready to discuss your PPC project? Let's connect.
      </p>

      <div className="space-y-2 mb-6">
        {[
          { icon: Mail, text: "abhinitupadhyay121@gmail.com" },
          { icon: Phone, text: "7091391375" },
          { icon: MapPin, text: "Gwalior, India" },
        ].map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Icon size={14} style={{ color: "oklch(var(--sap-blue))" }} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Quick contact buttons */}
      <div className="flex gap-3 mb-6">
        <a
          href="https://wa.me/917091391375"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
          data-ocid="contact.whatsapp_button"
        >
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg gap-2">
            <MessageCircle size={16} />
            WhatsApp
          </Button>
        </a>
        <a
          href="mailto:abhinitupadhyay121@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
          data-ocid="contact.email_button"
        >
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg gap-2">
            <Mail size={16} />
            Email Directly
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/abhinit-kumar-500105377"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
          data-ocid="contact.linkedin_button"
        >
          <Button
            className="w-full font-semibold rounded-lg gap-2"
            style={{ backgroundColor: "#0077b5", color: "white" }}
          >
            <Linkedin size={16} />
            LinkedIn
          </Button>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label
              htmlFor="contact-name"
              className="text-xs font-medium text-foreground/80 mb-1"
            >
              Name
            </Label>
            <Input
              id="contact-name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              className="bg-background border-border"
              data-ocid="contact.input"
            />
          </div>
          <div>
            <Label
              htmlFor="contact-email"
              className="text-xs font-medium text-foreground/80 mb-1"
            >
              Email
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              required
              className="bg-background border-border"
              data-ocid="contact.input"
            />
          </div>
        </div>
        <div>
          <Label
            htmlFor="contact-subject"
            className="text-xs font-medium text-foreground/80 mb-1"
          >
            Subject
          </Label>
          <Input
            id="contact-subject"
            placeholder="How can I help?"
            value={form.subject}
            onChange={(e) =>
              setForm((p) => ({ ...p, subject: e.target.value }))
            }
            required
            className="bg-background border-border"
            data-ocid="contact.input"
          />
        </div>
        <div>
          <Label
            htmlFor="contact-message"
            className="text-xs font-medium text-foreground/80 mb-1"
          >
            Message
          </Label>
          <Textarea
            id="contact-message"
            placeholder="Tell me about your PPC project..."
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
            required
            className="bg-background border-border resize-none"
            data-ocid="contact.textarea"
          />
        </div>
        <Button
          type="submit"
          className="w-full font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
          data-ocid="contact.submit_button"
        >
          Send via WhatsApp
        </Button>
      </form>
    </motion.section>
  );
}

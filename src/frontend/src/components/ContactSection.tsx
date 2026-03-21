import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
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
  const { mutateAsync, isPending } = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
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
        Ready to discuss your SAP project? Let's connect.
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
            placeholder="Tell me about your SAP project..."
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
          disabled={isPending}
          className="w-full font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
          data-ocid="contact.submit_button"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </motion.section>
  );
}

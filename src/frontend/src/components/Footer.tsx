import { SiLinkedin } from "react-icons/si";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = `utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      className="border-t border-border"
      style={{ backgroundColor: "oklch(var(--sap-shell))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-white font-semibold text-lg tracking-wide mb-1">
              ABHINIT UPADHYAY
            </div>
            <div className="text-white/60 text-sm">
              PPC Engineer | Production Planning &amp; Control Specialist
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/abhinit-kumar-500105377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
              data-ocid="nav.link"
            >
              <SiLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/50 text-xs">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline hover:text-white transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

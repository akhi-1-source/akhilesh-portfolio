import { GlassBackground } from "./GlassBackground";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const footerUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div
      className="min-h-screen relative"
      style={{ background: "rgb(4,4,18)" }}
    >
      <GlassBackground />
      <Navbar />

      <main className="relative z-10 pt-16">{children}</main>

      <footer
        className="relative z-10 mt-24 py-10 px-6 text-center"
        style={{
          borderTop: "1px solid rgba(112,180,255,0.1)",
          background:
            "linear-gradient(135deg, rgba(8,8,28,0.8) 0%, rgba(12,8,32,0.9) 100%)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="font-display text-sm font-medium"
            style={{ color: "rgba(180,200,230,0.6)" }}
          >
            © {year} Akhilesh Gusain. All rights reserved.
          </p>
          <p
            className="mt-1 text-xs"
            style={{ color: "rgba(120,140,180,0.45)" }}
          >
            Built with love using{" "}
            <a
              href={footerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:opacity-80"
              style={{ color: "rgba(112,180,255,0.7)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

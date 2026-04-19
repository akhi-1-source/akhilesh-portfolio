import { Award, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const CERTIFICATES = [
  {
    id: 1,
    title: "Digital Marketing Fundamentals",
    issuer: "Digital Marketing Course",
    date: "2024",
    description:
      "Comprehensive certification covering all aspects of digital marketing including SEO, SEM, social media, email marketing, and analytics.",
    badge: "🏆",
    color: "rgba(112,180,255,",
  },
  {
    id: 2,
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "2024",
    description:
      "Certified proficiency in Google Analytics 4 including data collection, processing, reporting, and making data-driven marketing decisions.",
    badge: "📊",
    color: "rgba(100,200,100,",
  },
  {
    id: 3,
    title: "Search Engine Marketing",
    issuer: "Digital Marketing Program",
    date: "2024",
    description:
      "In-depth training in Google Ads campaign management, keyword strategy, bidding optimisation, and performance reporting.",
    badge: "🎯",
    color: "rgba(191,57,204,",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    issuer: "Digital Marketing Program",
    date: "2024",
    description:
      "Certification in organic and paid social media strategies across Facebook, Instagram, and LinkedIn platforms.",
    badge: "📱",
    color: "rgba(155,100,255,",
  },
];

export function CertificatesPage() {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="certificates.page"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "rgba(112,180,255,0.7)" }}
          >
            Verified Credentials
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,210,100,1), rgba(255,160,60,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Certificates
            </span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(130,160,200,0.75)" }}
          >
            Recognised certifications validating my digital marketing expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative group cursor-default"
              data-ocid={`certificates.certificate.item.${cert.id}`}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth -z-10"
                style={{
                  background: `radial-gradient(ellipse at top, ${cert.color}0.2) 0%, transparent 70%)`,
                  filter: "blur(16px)",
                }}
              />

              <div
                className="h-full p-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                  border: `1px solid ${cert.color}0.2)`,
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${cert.color}0.1), inset 0 1px 0 rgba(255,255,255,0.1)`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color}0.18), transparent)`,
                      border: `1px solid ${cert.color}0.3)`,
                      boxShadow: `0 0 20px ${cert.color}0.2)`,
                    }}
                  >
                    {cert.badge}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award
                      size={14}
                      style={{ color: "rgba(255,200,80,0.7)" }}
                    />
                    <span
                      className="text-xs font-display font-semibold"
                      style={{ color: "rgba(255,200,80,0.7)" }}
                    >
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="font-display text-base font-bold mb-1"
                  style={{ color: "rgba(215,235,255,0.95)" }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-xs font-display font-medium mb-3"
                  style={{ color: `${cert.color}0.85)` }}
                >
                  {cert.issuer}
                </p>
                <p
                  className="text-sm leading-relaxed font-body"
                  style={{ color: "rgba(140,170,210,0.8)" }}
                >
                  {cert.description}
                </p>

                {/* View button */}
                <button
                  type="button"
                  className="mt-4 flex items-center gap-1.5 text-xs font-display font-medium transition-smooth opacity-50 hover:opacity-100"
                  style={{ color: `${cert.color}0.8)` }}
                  data-ocid={`certificates.view.button.${cert.id}`}
                >
                  <ExternalLink size={12} />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 glass-panel p-5 text-center"
        >
          <p
            className="text-sm font-body"
            style={{ color: "rgba(140,170,210,0.75)" }}
          >
            🏅 All certifications obtained through accredited digital marketing
            programs and verified industry platforms.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

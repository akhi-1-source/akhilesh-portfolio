import { Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { SKILLS } from "../types/portfolio";

const PROFILE_IMG =
  "https://drive.google.com/thumbnail?id=1hePqzBLo22socAmLk12p0oK6oCMXvxTt&sz=w400";

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full glow-pulse"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(112,180,255,0.4), rgba(191,57,204,0.4), rgba(155,100,255,0.4), rgba(112,180,255,0.4))",
          borderRadius: "50%",
          padding: "3px",
          filter: "blur(8px)",
          transform: "scale(1.12)",
        }}
      />
      {/* Inner ring */}
      <div
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
        style={{
          border: "2px solid rgba(112,180,255,0.35)",
          boxShadow:
            "0 0 40px rgba(112,180,255,0.3), 0 0 80px rgba(191,57,204,0.15), inset 0 0 40px rgba(112,180,255,0.05)",
        }}
      >
        <img
          src={PROFILE_IMG}
          alt="Akhilesh Gusain"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/generated/profile-hero.dim_400x400.png";
          }}
        />
        {/* Iridescent overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(112,180,255,0.08) 0%, transparent 50%, rgba(191,57,204,0.06) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function HomePage() {
  const featuredSkills = SKILLS.slice(0, 6);

  return (
    <div className="min-h-screen" data-ocid="home.page">
      {/* Hero section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <ProfilePhoto />
            </div>

            {/* Right: About */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="order-2 lg:order-2 space-y-6"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(112,180,255,0.7)" }}
                >
                  Welcome to my portfolio
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ color: "rgba(220,235,255,0.95)" }}
                >
                  Hi, I'm{" "}
                  <span
                    className="text-glow-cyan"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(112,180,255,1) 0%, rgba(155,100,255,1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Akhilesh
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-2 font-display text-lg md:text-xl font-medium"
                  style={{
                    color: "rgba(191,57,204,0.85)",
                    textShadow: "0 0 12px rgba(191,57,204,0.3)",
                  }}
                >
                  Digital Marketing Enthusiast | Fresher
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="glass-panel p-6"
              >
                <p
                  className="text-sm leading-relaxed font-body"
                  style={{ color: "rgba(170,195,230,0.85)" }}
                >
                  I am Akhilesh Gusain, a passionate and motivated fresher in
                  the field of digital marketing. I have recently completed my
                  training in digital marketing, where I gained hands-on
                  experience through live classes and real-life scenario-based
                  projects. During my course, I worked on multiple practical
                  projects that helped me understand core concepts such as
                  marketing strategy, campaign planning, and audience targeting.
                  This experience has strengthened my ability to apply
                  theoretical knowledge to real-world situations. I am eager to
                  start my professional journey in digital marketing, where I
                  can contribute my skills, continue learning, and grow in a
                  dynamic environment. I am particularly interested in
                  developing creative strategies that drive engagement and
                  deliver measurable results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="/assets/cv-akhilesh-gusain.pdf"
                  className="glass-button flex items-center gap-2 text-sm"
                  data-ocid="home.download_cv.button"
                >
                  <Download size={15} />
                  Download CV
                </a>
                <Link
                  to="/contact"
                  className="glass-button-accent flex items-center gap-2 text-sm"
                  data-ocid="home.contact.primary_button"
                >
                  Get in Touch
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-8" />

      {/* Quick Skills Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              className="font-display text-2xl font-bold"
              style={{ color: "rgba(220,235,255,0.9)" }}
            >
              Core Skills
            </h2>
            <p
              className="mt-1 text-sm"
              style={{ color: "rgba(130,160,200,0.7)" }}
            >
              A glimpse of what I bring to the table
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {featuredSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="skill-glass-btn"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="mr-1.5">{skill.icon}</span>
                {skill.label}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link
              to="/skills"
              className="glass-button text-sm inline-flex items-center gap-2"
              data-ocid="home.view_all_skills.link"
            >
              View All Skills <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

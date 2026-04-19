import { motion } from "motion/react";
import { SKILLS } from "../types/portfolio";

export function SkillsPage() {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="skills.page"
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
            What I Bring
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(112,180,255,1), rgba(191,57,204,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills
            </span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(130,160,200,0.75)" }}
          >
            19 core competencies built through hands-on training and real-world
            projects
          </p>
        </motion.div>

        {/* 3D Liquid Glass Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
          data-ocid="skills.list"
        >
          {SKILLS.map((skill, i) => (
            <motion.button
              key={skill.label}
              type="button"
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                type: "spring",
                stiffness: 180,
                damping: 15,
              }}
              whileHover={{
                scale: 1.08,
                y: -4,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.96 }}
              data-ocid={`skills.skill.item.${i + 1}`}
              className="skill-glass-btn glow-pulse"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <span className="mr-2 text-base">{skill.icon}</span>
              {skill.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Decorative section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { number: "19", label: "Core Skills" },
              { number: "8", label: "Course Modules" },
              { number: "3+", label: "Live Projects" },
              { number: "100+", label: "Hours Training" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <p
                  className="font-display text-4xl font-black"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(112,180,255,1), rgba(191,57,204,1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 10px rgba(112,180,255,0.3))",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  className="mt-1 text-xs font-display font-medium"
                  style={{ color: "rgba(140,170,210,0.75)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

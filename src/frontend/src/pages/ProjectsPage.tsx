import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { PROJECTS } from "../types/portfolio";

const COLOR_MAP: Record<
  string,
  { glow: string; border: string; badge: string }
> = {
  cyan: {
    glow: "rgba(112,180,255,0.35)",
    border: "rgba(112,180,255,0.3)",
    badge: "rgba(112,180,255,0.15)",
  },
  purple: {
    glow: "rgba(155,100,255,0.35)",
    border: "rgba(155,100,255,0.3)",
    badge: "rgba(155,100,255,0.15)",
  },
  magenta: {
    glow: "rgba(191,57,204,0.35)",
    border: "rgba(191,57,204,0.3)",
    badge: "rgba(191,57,204,0.15)",
  },
};

function FloatingProjectCard({
  project,
  index,
}: { project: (typeof PROJECTS)[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const colors = COLOR_MAP[project.color] ?? COLOR_MAP.cyan;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="float-animation"
      style={{ animationDelay: `${index * 2}s` }}
    >
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-ocid={`projects.card.item.${project.id}`}
        className="relative cursor-default"
      >
        {/* Glow backdrop */}
        <div
          className="absolute inset-0 rounded-2xl -z-10 transition-all duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${colors.glow} 0%, transparent 70%)`,
            filter: "blur(20px)",
            transform: "translateZ(-10px)",
          }}
        />

        <div
          className="p-7 rounded-2xl h-full transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
            border: `1px solid ${colors.border}`,
            backdropFilter: "blur(20px)",
            boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 30px ${colors.glow}, inset 0 1px 0 rgba(255,255,255,0.12)`,
          }}
        >
          {/* Project number */}
          <div className="flex items-start justify-between mb-5">
            <span
              className="text-4xl font-display font-black opacity-20"
              style={{ color: colors.glow.replace("0.35", "1") }}
            >
              {String(project.id).padStart(2, "0")}
            </span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.badge}, transparent)`,
                border: `1px solid ${colors.border}`,
              }}
            >
              {project.id === 1 ? "📱" : project.id === 2 ? "📊" : "🏷️"}
            </div>
          </div>

          <h3
            className="font-display text-xl font-bold mb-3 leading-snug"
            style={{ color: "rgba(215,235,255,0.95)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-5 font-body"
            style={{ color: "rgba(150,180,220,0.8)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full font-display font-medium"
                style={{
                  background: colors.badge,
                  border: `1px solid ${colors.border}`,
                  color: colors.glow.replace("0.35", "0.9"),
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsPage() {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="projects.page"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "rgba(112,180,255,0.7)" }}
          >
            Portfolio Work
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            Featured{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(155,100,255,1), rgba(191,57,204,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(130,160,200,0.75)" }}
          >
            Practical projects completed during my digital marketing training
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-3 gap-8"
          style={{ perspective: "1000px" }}
        >
          {PROJECTS.map((project, i) => (
            <FloatingProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";

const CLASS_ACTIVITIES = [
  {
    id: 1,
    title: "SEO Audit Exercise",
    description:
      "Performed a complete on-page and technical SEO audit of a sample website, identifying keyword gaps, meta tag issues, and page speed opportunities.",
    category: "SEO",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Google Ads Campaign Blueprint",
    description:
      "Designed a complete PPC campaign structure including ad groups, keywords, negative keywords, and ad copy variations for a hypothetical e-commerce brand.",
    category: "SEM",
    icon: "📊",
  },
  {
    id: 3,
    title: "Social Media Content Calendar",
    description:
      "Created a 30-day content calendar for Instagram and LinkedIn with post themes, captions, hashtag strategies, and optimal posting schedules.",
    category: "Social Media",
    icon: "📅",
  },
  {
    id: 4,
    title: "Email Marketing Sequence",
    description:
      "Wrote a 5-email welcome sequence for a new subscriber, covering introduction, value delivery, case study, offer, and follow-up emails.",
    category: "Email",
    icon: "📧",
  },
  {
    id: 5,
    title: "Competitor Analysis Report",
    description:
      "Analysed three competitors across SEO, social media presence, ad strategy and content to identify gaps and strategic opportunities.",
    category: "Research",
    icon: "📈",
  },
  {
    id: 6,
    title: "Landing Page Copy",
    description:
      "Crafted high-converting landing page copy using AIDA framework for a digital product launch, including headline, subheadline, features, and CTA.",
    category: "Copywriting",
    icon: "✍️",
  },
];

const OTHER_TASKS = [
  {
    id: 1,
    title: "Blog Content Strategy",
    description:
      "Developed a blog content strategy with topic clusters, pillar pages, and internal linking plan to improve organic search visibility.",
    icon: "📝",
  },
  {
    id: 2,
    title: "Keyword Research Document",
    description:
      "Compiled comprehensive keyword research with search volume, keyword difficulty, and intent mapping for a niche market.",
    icon: "🎯",
  },
  {
    id: 3,
    title: "Social Media Profile Optimisation",
    description:
      "Optimised LinkedIn and Instagram profiles with keyword-rich bios, consistent branding, and strategic highlights to maximise discoverability.",
    icon: "✨",
  },
];

function TaskCard({
  item,
  index,
  accentColor,
}: {
  item: {
    id: number;
    title: string;
    description: string;
    icon: string;
    category?: string;
  };
  index: number;
  accentColor: "cyan" | "purple";
}) {
  const isCyan = accentColor === "cyan";
  const color = isCyan ? "rgba(112,180,255," : "rgba(191,57,204,";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1"
      data-ocid={`other_tasks.task.item.${item.id}`}
      style={{
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${color}0.1), inset 0 1px 0 rgba(255,255,255,0.1)`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${color}0.15), transparent)`,
            border: `1px solid ${color}0.25)`,
          }}
        >
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          {item.category && (
            <span
              className="text-xs font-display font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
              style={{
                background: `${color}0.12)`,
                border: `1px solid ${color}0.25)`,
                color: `${color}0.9)`,
              }}
            >
              {item.category}
            </span>
          )}
          <h3
            className="font-display text-sm font-bold mb-1.5"
            style={{ color: "rgba(210,230,255,0.95)" }}
          >
            {item.title}
          </h3>
          <p
            className="text-xs leading-relaxed font-body"
            style={{ color: "rgba(140,170,210,0.8)" }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function OtherTasksPage() {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="other_tasks.page"
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
            Beyond Core Projects
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            Other{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(112,180,255,1), rgba(155,100,255,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tasks
            </span>
          </h1>
        </motion.div>

        {/* Class Activity Section */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-xl font-bold mb-6 flex items-center gap-3"
            style={{ color: "rgba(210,230,255,0.9)" }}
          >
            <div
              className="w-8 h-px flex-1"
              style={{
                background:
                  "linear-gradient(90deg, rgba(112,180,255,0.5), transparent)",
              }}
            />
            <span>🏫 Class Activity Projects</span>
            <div
              className="w-8 h-px flex-1"
              style={{
                background:
                  "linear-gradient(270deg, rgba(112,180,255,0.5), transparent)",
              }}
            />
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {CLASS_ACTIVITIES.map((item, i) => (
              <TaskCard
                key={item.id}
                item={item}
                index={i}
                accentColor="cyan"
              />
            ))}
          </div>
        </div>

        <div className="section-divider mb-14" />

        {/* Other Tasks Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-xl font-bold mb-6 flex items-center gap-3"
            style={{ color: "rgba(210,230,255,0.9)" }}
          >
            <div
              className="w-8 h-px flex-1"
              style={{
                background:
                  "linear-gradient(90deg, rgba(191,57,204,0.5), transparent)",
              }}
            />
            <span>⚡ Additional Assignments</span>
            <div
              className="w-8 h-px flex-1"
              style={{
                background:
                  "linear-gradient(270deg, rgba(191,57,204,0.5), transparent)",
              }}
            />
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {OTHER_TASKS.map((item, i) => (
              <TaskCard
                key={item.id}
                item={item}
                index={i}
                accentColor="purple"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

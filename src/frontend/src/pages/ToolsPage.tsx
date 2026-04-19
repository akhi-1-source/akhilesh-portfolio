import { motion } from "motion/react";
import { useState } from "react";
import { TOOLS } from "../types/portfolio";

const CATEGORIES = [
  "All",
  "Analytics",
  "Paid Media",
  "SEO",
  "Social Media",
  "Design",
  "Email Marketing",
  "CMS",
  "CRM",
  "Productivity",
  "Project Management",
];

const TOOL_ICONS: Record<string, string> = {
  "Google Analytics 4": "📊",
  "Google Ads": "🎯",
  "Google Search Console": "🔍",
  SEMrush: "⚡",
  Ahrefs: "🔗",
  Canva: "🎨",
  "Meta Business Suite": "👥",
  "Facebook Ads Manager": "📣",
  Mailchimp: "📧",
  WordPress: "🌐",
  "HubSpot CRM": "🤝",
  Buffer: "⏱️",
  Hootsuite: "🦉",
  "Google Keyword Planner": "🔑",
  Ubersuggest: "💡",
  Notion: "📋",
  "Google Workspace": "💼",
  Trello: "📌",
};

export function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? TOOLS
      : TOOLS.filter((t) => t.category === activeCategory);

  const usedCategories = [
    "All",
    ...Array.from(new Set(TOOLS.map((t) => t.category))),
  ];

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="tools.page"
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
            My Toolkit
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            Tools &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(100,200,180,1), rgba(112,180,255,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Platforms
            </span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(130,160,200,0.75)" }}
          >
            Professional tools I've learned and applied during my digital
            marketing training
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {usedCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              data-ocid={`tools.filter.${cat.toLowerCase().replace(/\s+/g, "_")}.tab`}
              className="px-3.5 py-1.5 rounded-full text-xs font-display font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, rgba(112,180,255,0.25), rgba(155,100,255,0.2))"
                    : "rgba(255,255,255,0.04)",
                border:
                  activeCategory === cat
                    ? "1px solid rgba(112,180,255,0.45)"
                    : "1px solid rgba(255,255,255,0.08)",
                color:
                  activeCategory === cat
                    ? "rgba(180,220,255,0.95)"
                    : "rgba(130,160,200,0.7)",
                boxShadow:
                  activeCategory === cat
                    ? "0 0 12px rgba(112,180,255,0.2)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="glass-card p-4 flex items-center gap-4 cursor-default"
              data-ocid={`tools.tool.item.${i + 1}`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(112,180,255,0.12), rgba(191,57,204,0.08))",
                  border: "1px solid rgba(112,180,255,0.2)",
                  boxShadow: "0 0 15px rgba(112,180,255,0.1)",
                }}
              >
                {TOOL_ICONS[tool.name] ?? "🛠️"}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="font-display text-sm font-semibold truncate"
                  style={{ color: "rgba(210,230,255,0.95)" }}
                >
                  {tool.name}
                </p>
                <span
                  className="text-xs font-display px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(112,180,255,0.1)",
                    color: "rgba(112,180,255,0.7)",
                    border: "1px solid rgba(112,180,255,0.15)",
                  }}
                >
                  {tool.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stat */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p
            className="font-display text-xs"
            style={{ color: "rgba(100,140,180,0.6)" }}
          >
            {TOOLS.length} tools across {CATEGORIES.length - 1} categories
          </p>
        </motion.div>
      </div>
    </div>
  );
}

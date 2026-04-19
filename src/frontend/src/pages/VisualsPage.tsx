import { ImageIcon } from "lucide-react";
import { motion } from "motion/react";

const CREATIVE_CATEGORIES = [
  {
    id: 1,
    label: "Social Media Graphics",
    description:
      "Brand-consistent post designs for Instagram & Facebook campaigns",
    count: 8,
    icon: "📸",
    accent: "rgba(112,180,255,",
  },
  {
    id: 2,
    label: "Ad Creatives",
    description:
      "Performance-focused ad banners designed in Canva for paid campaigns",
    count: 5,
    icon: "📣",
    accent: "rgba(191,57,204,",
  },
  {
    id: 3,
    label: "Infographics",
    description: "Data-driven visual content explaining marketing concepts",
    count: 4,
    icon: "📊",
    accent: "rgba(155,100,255,",
  },
  {
    id: 4,
    label: "Brand Mood Boards",
    description: "Visual identity explorations for brand presence projects",
    count: 3,
    icon: "🎨",
    accent: "rgba(100,200,180,",
  },
];

const PLACEHOLDER_CREATIVES = [
  { id: 1, label: "Campaign Visual 1", category: "Social Media Graphics" },
  { id: 2, label: "Ad Banner — Google", category: "Ad Creatives" },
  { id: 3, label: "SEO Infographic", category: "Infographics" },
  { id: 4, label: "Brand Mood Board", category: "Brand Mood Boards" },
  { id: 5, label: "Instagram Carousel", category: "Social Media Graphics" },
  { id: 6, label: "Facebook Ad Creative", category: "Ad Creatives" },
];

function CreativePlaceholder({
  item,
  index,
}: { item: (typeof PLACEHOLDER_CREATIVES)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass-card overflow-hidden cursor-pointer group"
      data-ocid={`visuals.creative.item.${item.id}`}
    >
      {/* Placeholder canvas area */}
      <div
        className="relative h-44 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(112,180,255,0.06) 0%, rgba(191,57,204,0.06) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="flex flex-col items-center gap-2 opacity-40 group-hover:opacity-60 transition-smooth">
          <ImageIcon size={32} style={{ color: "rgba(112,180,255,0.8)" }} />
          <span
            className="text-xs font-display"
            style={{ color: "rgba(150,180,220,0.8)" }}
          >
            Creative Coming Soon
          </span>
        </div>
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, rgba(112,180,255,0.06) 50%, transparent 70%)",
          }}
        />
      </div>
      <div className="p-4">
        <p
          className="font-display text-sm font-semibold"
          style={{ color: "rgba(200,225,255,0.9)" }}
        >
          {item.label}
        </p>
        <p
          className="text-xs mt-0.5"
          style={{ color: "rgba(120,150,190,0.7)" }}
        >
          {item.category}
        </p>
      </div>
    </motion.div>
  );
}

export function VisualsPage() {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="visuals.page"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "rgba(191,57,204,0.7)" }}
          >
            Creative Work
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            Visual &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(191,57,204,1), rgba(155,100,255,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Creative
            </span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(130,160,200,0.75)" }}
          >
            Designs, graphics, and visual assets created during training and
            projects
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {CREATIVE_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel p-5 text-center"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <p
                className="font-display text-sm font-bold mb-1"
                style={{ color: "rgba(210,230,255,0.9)" }}
              >
                {cat.label}
              </p>
              <p
                className="text-xs mb-2"
                style={{ color: "rgba(130,160,200,0.7)" }}
              >
                {cat.description}
              </p>
              <span
                className="text-xs font-display font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: `${cat.accent}0.12)`,
                  border: `1px solid ${cat.accent}0.3)`,
                  color: `${cat.accent}0.9)`,
                }}
              >
                {cat.count} pieces
              </span>
            </motion.div>
          ))}
        </div>

        <div className="section-divider mb-14" />

        {/* Gallery grid */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-xl font-bold mb-6"
          style={{ color: "rgba(210,230,255,0.9)" }}
        >
          Gallery
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLACEHOLDER_CREATIVES.map((item, i) => (
            <CreativePlaceholder key={item.id} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 glass-panel p-6 text-center"
        >
          <p
            className="font-display text-sm font-medium"
            style={{ color: "rgba(150,180,220,0.8)" }}
          >
            🎨 More creative work being added regularly. Check back soon!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

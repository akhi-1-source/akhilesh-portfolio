import {
  Award,
  Download,
  ExternalLink,
  ImageIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { useState } from "react";
import { COURSES, PROJECTS, SKILLS, TOOLS } from "../types/portfolio";

// ─── Profile Photo ───────────────────────────────────────────────────────────

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

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  titleHighlight,
  highlightGradient,
  subtitle,
  labelColor = "rgba(112,180,255,0.7)",
}: {
  label: string;
  title: string;
  titleHighlight: string;
  highlightGradient: string;
  subtitle: string;
  labelColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14"
    >
      <p
        className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
        style={{ color: labelColor }}
      >
        {label}
      </p>
      <h2
        className="font-display text-4xl md:text-5xl font-bold"
        style={{ color: "rgba(220,235,255,0.95)" }}
      >
        {title}{" "}
        <span
          style={{
            background: highlightGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {titleHighlight}
        </span>
      </h2>
      <p
        className="mt-3 text-sm max-w-xl mx-auto"
        style={{ color: "rgba(130,160,200,0.75)" }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

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
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
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
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        data-ocid={`projects.card.item.${project.id}`}
        className="relative cursor-default"
      >
        <div
          className="absolute inset-0 rounded-2xl -z-10"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${colors.glow} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
        <div
          className="p-7 rounded-2xl h-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
            border: `1px solid ${colors.border}`,
            backdropFilter: "blur(20px)",
            boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 30px ${colors.glow}, inset 0 1px 0 rgba(255,255,255,0.12)`,
          }}
        >
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

// ─── Other Tasks ─────────────────────────────────────────────────────────────

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
  const color =
    accentColor === "cyan" ? "rgba(112,180,255," : "rgba(191,57,204,";
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

// ─── Visuals ──────────────────────────────────────────────────────────────────

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

// ─── Tools ─────────────────────────────────────────────────────────────────────

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

// ─── Certificates ─────────────────────────────────────────────────────────────

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

// ─── Contact form ─────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/akhilesh-gusain",
    color: "rgba(0,119,181,0.9)",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://twitter.com/akhileshgusain",
    color: "rgba(29,161,242,0.9)",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/akhileshgusain",
    color: "rgba(228,64,95,0.9)",
  },
];

// ─── Section divider ──────────────────────────────────────────────────────────

function SectionDivider({ gradient }: { gradient: string }) {
  return (
    <div
      className="w-full h-px my-0"
      style={{ background: gradient, opacity: 0.3 }}
    />
  );
}

// ─── Main SinglePage ──────────────────────────────────────────────────────────

export function SinglePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const filteredTools =
    activeCategory === "All"
      ? TOOLS
      : TOOLS.filter((t) => t.category === activeCategory);
  const usedCategories = [
    "All",
    ...Array.from(new Set(TOOLS.map((t) => t.category))),
  ];

  function handleChange(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm(INITIAL_FORM);
      setSubmitted(false);
    }, 3000);
  }

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section
        id="home"
        className="min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 lg:px-8 py-16"
        data-ocid="home.page"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex justify-center lg:justify-end order-1">
              <ProfilePhoto />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="order-2 space-y-6"
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
                  dynamic environment.
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
                  <Download size={15} /> Download CV
                </a>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="glass-button-accent flex items-center gap-2 text-sm"
                  data-ocid="home.contact.primary_button"
                >
                  Get in Touch
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(112,180,255,0.5), transparent)" />

      {/* ── JOURNEY ── */}
      <section
        id="journey"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="journey.page"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="My Learning Path"
            title="Course"
            titleHighlight="Journey"
            highlightGradient="linear-gradient(135deg, rgba(112,180,255,1), rgba(191,57,204,1))"
            subtitle="8 comprehensive modules that shaped my understanding of modern digital marketing"
          />
          <div className="relative">
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(112,180,255,0.5) 0%, rgba(191,57,204,0.4) 60%, transparent 100%)",
                transform: "translateX(-50%)",
              }}
            />
            <div className="space-y-8">
              {COURSES.map((course, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div
                      className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl md:mx-auto md:absolute md:left-1/2 md:-translate-x-1/2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(112,180,255,0.2), rgba(191,57,204,0.15))",
                        border: "1px solid rgba(112,180,255,0.35)",
                        boxShadow: "0 0 20px rgba(112,180,255,0.25)",
                      }}
                    >
                      {course.icon}
                    </div>
                    <div
                      className={`flex-1 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                    >
                      <div
                        className="glass-card p-5 transition-all duration-300 hover:scale-[1.01]"
                        data-ocid={`journey.course.item.${course.id}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-xs font-display font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(112,180,255,0.12)",
                              border: "1px solid rgba(112,180,255,0.25)",
                              color: "rgba(112,180,255,0.9)",
                            }}
                          >
                            Course {course.id}
                          </span>
                        </div>
                        <h3
                          className="font-display text-base font-bold mb-2"
                          style={{ color: "rgba(210,230,255,0.95)" }}
                        >
                          {course.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed font-body"
                          style={{ color: "rgba(150,180,220,0.8)" }}
                        >
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(155,100,255,0.5), transparent)" />

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="projects.page"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Portfolio Work"
            title="Featured"
            titleHighlight="Projects"
            highlightGradient="linear-gradient(135deg, rgba(155,100,255,1), rgba(191,57,204,1))"
            subtitle="Practical projects completed during my digital marketing training"
          />
          <div
            className="grid md:grid-cols-3 gap-8"
            style={{ perspective: "1000px" }}
          >
            {PROJECTS.map((project, i) => (
              <FloatingProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(112,180,255,0.4), transparent)" />

      {/* ── OTHER TASKS ── */}
      <section
        id="other-tasks"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="other_tasks.page"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Beyond Core Projects"
            title="Other"
            titleHighlight="Tasks"
            highlightGradient="linear-gradient(135deg, rgba(112,180,255,1), rgba(155,100,255,1))"
            subtitle="Class activities, assignments, and additional work completed during training"
          />

          <div className="mb-14">
            <motion.h3
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
            </motion.h3>
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

          <div>
            <motion.h3
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
            </motion.h3>
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
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(191,57,204,0.5), transparent)" />

      {/* ── VISUALS ── */}
      <section
        id="visuals"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="visuals.page"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Creative Work"
            title="Visual &"
            titleHighlight="Creative"
            highlightGradient="linear-gradient(135deg, rgba(191,57,204,1), rgba(155,100,255,1))"
            subtitle="Designs, graphics, and visual assets created during training and projects"
            labelColor="rgba(191,57,204,0.7)"
          />

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

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl font-bold mb-6"
            style={{ color: "rgba(210,230,255,0.9)" }}
          >
            Gallery
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLACEHOLDER_CREATIVES.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card overflow-hidden cursor-pointer group"
                data-ocid={`visuals.creative.item.${item.id}`}
              >
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(112,180,255,0.06) 0%, rgba(191,57,204,0.06) 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex flex-col items-center gap-2 opacity-40 group-hover:opacity-60 transition-smooth">
                    <ImageIcon
                      size={32}
                      style={{ color: "rgba(112,180,255,0.8)" }}
                    />
                    <span
                      className="text-xs font-display"
                      style={{ color: "rgba(150,180,220,0.8)" }}
                    >
                      Creative Coming Soon
                    </span>
                  </div>
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
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(100,200,180,0.5), transparent)" />

      {/* ── TOOLS ── */}
      <section
        id="tools"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="tools.page"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="My Toolkit"
            title="Tools &"
            titleHighlight="Platforms"
            highlightGradient="linear-gradient(135deg, rgba(100,200,180,1), rgba(112,180,255,1))"
            subtitle="Professional tools I've learned and applied during my digital marketing training"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool, i) => (
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
              {TOOLS.length} tools across multiple categories
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(112,180,255,0.5), rgba(191,57,204,0.5), transparent)" />

      {/* ── SKILLS ── */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="skills.page"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="What I Bring"
            title="My"
            titleHighlight="Skills"
            highlightGradient="linear-gradient(135deg, rgba(112,180,255,1), rgba(191,57,204,1))"
            subtitle="19 core competencies built through hands-on training and real-world projects"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
            data-ocid="skills.list"
          >
            {SKILLS.map((skill, i) => (
              <motion.button
                key={skill.label}
                type="button"
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
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
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(255,210,100,0.4), transparent)" />

      {/* ── CERTIFICATES ── */}
      <section
        id="certificates"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="certificates.page"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Verified Credentials"
            title="My"
            titleHighlight="Certificates"
            highlightGradient="linear-gradient(135deg, rgba(255,210,100,1), rgba(255,160,60,1))"
            subtitle="Recognised certifications validating my digital marketing expertise"
          />

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
                  <button
                    type="button"
                    className="mt-4 flex items-center gap-1.5 text-xs font-display font-medium transition-smooth opacity-50 hover:opacity-100"
                    style={{ color: `${cert.color}0.8)` }}
                    data-ocid={`certificates.view.button.${cert.id}`}
                  >
                    <ExternalLink size={12} /> View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

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
              🏅 All certifications obtained through accredited digital
              marketing programs and verified industry platforms.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider gradient="linear-gradient(90deg, transparent, rgba(191,57,204,0.5), rgba(112,180,255,0.5), transparent)" />

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="contact.page"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Let's Connect"
            title="Get in"
            titleHighlight="Touch"
            highlightGradient="linear-gradient(135deg, rgba(191,57,204,1), rgba(112,180,255,1))"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          />

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-5"
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "akhileshgusain@email.com",
                  color: "rgba(112,180,255,",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 XXXXX XXXXX",
                  color: "rgba(191,57,204,",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "India",
                  color: "rgba(155,100,255,",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}0.18), transparent)`,
                      border: `1px solid ${item.color}0.3)`,
                    }}
                  >
                    <item.icon
                      size={16}
                      style={{ color: `${item.color}0.9)` }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-display font-semibold"
                      style={{ color: "rgba(120,150,190,0.7)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-display font-medium"
                      style={{ color: "rgba(200,225,255,0.9)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="glass-card p-5">
                <p
                  className="text-xs font-display font-semibold mb-3"
                  style={{ color: "rgba(120,150,190,0.7)" }}
                >
                  SOCIAL LINKS
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      data-ocid={`contact.social.${s.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.link`}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <s.icon size={16} style={{ color: s.color }} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                    data-ocid="contact.form.success_state"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h3
                      className="font-display text-xl font-bold mb-2"
                      style={{ color: "rgba(100,220,160,0.9)" }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(140,170,210,0.75)" }}
                    >
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-display font-semibold mb-1.5"
                          style={{ color: "rgba(130,160,200,0.8)" }}
                        >
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Akhilesh Gusain"
                          required
                          data-ocid="contact.name.input"
                          className="w-full px-4 py-2.5 rounded-xl text-sm font-body outline-none transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(112,180,255,0.15)",
                            color: "rgba(200,225,255,0.9)",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(112,180,255,0.45)";
                            e.currentTarget.style.boxShadow =
                              "0 0 12px rgba(112,180,255,0.15)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(112,180,255,0.15)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-display font-semibold mb-1.5"
                          style={{ color: "rgba(130,160,200,0.8)" }}
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          placeholder="hello@example.com"
                          required
                          data-ocid="contact.email.input"
                          className="w-full px-4 py-2.5 rounded-xl text-sm font-body outline-none transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(112,180,255,0.15)",
                            color: "rgba(200,225,255,0.9)",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(112,180,255,0.45)";
                            e.currentTarget.style.boxShadow =
                              "0 0 12px rgba(112,180,255,0.15)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(112,180,255,0.15)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-display font-semibold mb-1.5"
                        style={{ color: "rgba(130,160,200,0.8)" }}
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) =>
                          handleChange("subject", e.target.value)
                        }
                        placeholder="Let's work together"
                        required
                        data-ocid="contact.subject.input"
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-body outline-none transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(112,180,255,0.15)",
                          color: "rgba(200,225,255,0.9)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(112,180,255,0.45)";
                          e.currentTarget.style.boxShadow =
                            "0 0 12px rgba(112,180,255,0.15)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(112,180,255,0.15)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-display font-semibold mb-1.5"
                        style={{ color: "rgba(130,160,200,0.8)" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Tell me about your project or opportunity..."
                        required
                        data-ocid="contact.message.textarea"
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-body outline-none transition-all duration-300 resize-none"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(112,180,255,0.15)",
                          color: "rgba(200,225,255,0.9)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(112,180,255,0.45)";
                          e.currentTarget.style.boxShadow =
                            "0 0 12px rgba(112,180,255,0.15)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(112,180,255,0.15)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full glass-button-accent flex items-center justify-center gap-2 py-3"
                      data-ocid="contact.form.submit_button"
                    >
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

export interface CourseModule {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  label: string;
  icon?: string;
}

export interface Tool {
  name: string;
  category: string;
  icon?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Other Tasks", href: "#other-tasks" },
  { label: "Visual & Creative", href: "#visuals" },
  { label: "Tools", href: "#tools" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { label: "English Proficiency (Spoken)", icon: "🗣️" },
  { label: "English Proficiency (Written)", icon: "✍️" },
  { label: "Market Research", icon: "🔍" },
  { label: "Blogging", icon: "📝" },
  { label: "WordPress", icon: "🌐" },
  { label: "SEO", icon: "⚡" },
  { label: "SEM", icon: "🎯" },
  { label: "Google AdWords", icon: "📊" },
  { label: "Performance Marketing", icon: "📈" },
  { label: "Social Media Marketing", icon: "📱" },
  { label: "Content Writing", icon: "✏️" },
  { label: "Facebook Marketing", icon: "👥" },
  { label: "Creative Writing", icon: "💡" },
  { label: "Copywriting", icon: "🖊️" },
  { label: "Canva", icon: "🎨" },
  { label: "Instagram Marketing", icon: "📸" },
  { label: "Facebook Ads", icon: "📣" },
  { label: "Email Marketing", icon: "📧" },
  { label: "Lead Generation", icon: "🚀" },
];

export const COURSES: CourseModule[] = [
  {
    id: 1,
    title: "Marketing Fundamentals: A Beginner's Journey",
    description:
      "Core marketing principles, consumer behaviour, and brand strategy foundations that form the bedrock of all digital efforts.",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Build and Rank Your Website",
    description:
      "Website architecture, on-page optimisation, technical SEO, and ranking strategies to establish a strong online presence.",
    icon: "🌐",
  },
  {
    id: 3,
    title: "Search Engine Marketing",
    description:
      "PPC campaign setup, keyword research, ad copywriting, bidding strategies and quality score optimisation.",
    icon: "🔍",
  },
  {
    id: 4,
    title: "Impacting Audiences with Social Media Organic",
    description:
      "Building organic communities, content calendars, engagement tactics, and platform algorithms across major social networks.",
    icon: "📱",
  },
  {
    id: 5,
    title: "Paid Social Media Marketing — Reach Beyond Organic",
    description:
      "Paid campaigns on Facebook, Instagram & LinkedIn, audience segmentation, retargeting and conversion tracking.",
    icon: "📣",
  },
  {
    id: 6,
    title: "Lead, Engage",
    description:
      "Lead generation funnels, nurturing sequences, CRM basics, and engagement strategies that move prospects through the funnel.",
    icon: "🎯",
  },
  {
    id: 7,
    title: "Google Analytics",
    description:
      "GA4 setup, event tracking, custom dashboards, audience insights, and data-driven decision making.",
    icon: "📊",
  },
  {
    id: 8,
    title: "Elevating Your Digital Marketing Game",
    description:
      "Advanced integrated strategies, automation tools, A/B testing, and personal branding to stand out in the industry.",
    icon: "🚀",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Strategy, Growth & Engagement for Social Media",
    description:
      "Developed a comprehensive social media strategy covering content pillars, posting cadence, audience targeting, and engagement tactics. Crafted compelling copy and visual briefs that drove measurable follower growth.",
    tags: ["Social Media", "Content Strategy", "Engagement"],
    color: "cyan",
  },
  {
    id: 2,
    title: "Driving Results with Google Ads",
    description:
      "Built and optimised a Google Ads campaign from scratch — keyword research, ad group structuring, compelling ad copy, and bid adjustments. Analysed performance data to improve CTR and reduce cost-per-click.",
    tags: ["Google Ads", "SEM", "PPC", "Analytics"],
    color: "purple",
  },
  {
    id: 3,
    title: "Building Brand Presence",
    description:
      "Created a cohesive brand identity framework including messaging pillars, tone of voice, visual consistency guidelines, and a multi-channel presence strategy to establish credibility in a competitive market.",
    tags: ["Branding", "Strategy", "Content"],
    color: "magenta",
  },
];

export const TOOLS: Tool[] = [
  { name: "Google Analytics 4", category: "Analytics" },
  { name: "Google Ads", category: "Paid Media" },
  { name: "Google Search Console", category: "SEO" },
  { name: "SEMrush", category: "SEO" },
  { name: "Ahrefs", category: "SEO" },
  { name: "Canva", category: "Design" },
  { name: "Meta Business Suite", category: "Social Media" },
  { name: "Facebook Ads Manager", category: "Paid Media" },
  { name: "Mailchimp", category: "Email Marketing" },
  { name: "WordPress", category: "CMS" },
  { name: "HubSpot CRM", category: "CRM" },
  { name: "Buffer", category: "Social Media" },
  { name: "Hootsuite", category: "Social Media" },
  { name: "Google Keyword Planner", category: "SEO" },
  { name: "Ubersuggest", category: "SEO" },
  { name: "Notion", category: "Productivity" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Trello", category: "Project Management" },
];

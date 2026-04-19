import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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

export function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

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
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="contact.page"
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
            Let's Connect
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            Get in{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(191,57,204,1), rgba(112,180,255,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(130,160,200,0.75)" }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info cards */}
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
                  <item.icon size={16} style={{ color: `${item.color}0.9)` }} />
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

            {/* Social Links */}
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
                    data-ocid={`contact.social.${s.label.toLowerCase()}.link`}
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
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
                        onChange={(e) => handleChange("email", e.target.value)}
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
                      onChange={(e) => handleChange("subject", e.target.value)}
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
                      onChange={(e) => handleChange("message", e.target.value)}
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
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { COURSES } from "../types/portfolio";

export function JourneyPage() {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      data-ocid="journey.page"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
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
            My Learning Path
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "rgba(220,235,255,0.95)" }}
          >
            Course{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgba(112,180,255,1), rgba(191,57,204,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "rgba(130,160,200,0.75)" }}
          >
            8 comprehensive modules that shaped my understanding of modern
            digital marketing
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
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
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile / desktop connector dot */}
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

                  {/* Card */}
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
    </div>
  );
}

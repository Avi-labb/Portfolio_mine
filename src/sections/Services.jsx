import React from "react";
import { Code, Server, Database } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    icon: Code,
    description:
      "Building responsive, high-performance user interfaces using modern frameworks like React. Focused on clean design, accessibility, and seamless user experience.",
    tech: ["React", "Tailwind", "JavaScript", "Next.js"],
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Designing scalable server-side applications and APIs with secure authentication, efficient logic, and robust architecture.",
    tech: ["Node.js", "Express", "JWT auth", "REST APIs","Cloudinary"]
  },
  {
    title: "Database Management",
    icon: Database,
    description:
      "Handling data with optimized database structures, ensuring performance, security, and reliability for real-world applications.",
    tech: ["MongoDB", "Mongoose", "SQL", "Data Modeling","PostgreSQL"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 ">
      <div className="absolute h-45 blur-2xl bg-primary/5 w-full rounded-full" />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          My Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
                className="border border-white/20  shadow-2xl rounded-2xl hover:scale-105 transition duration-300 p-6 text-center"
              >
                <div className="flex  justify-center mb-4">
                  <div className="p-4 border border-white/10 bg-primary/5 rounded-full">
                    <Icon size={45} className="text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold font-serif mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 font-semibold text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {service.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

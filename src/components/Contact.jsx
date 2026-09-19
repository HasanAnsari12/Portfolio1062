import { motion } from "framer-motion";

function Contact() {
  const contactItems = [
    {
      icon: "📧",
      title: "Email",
      value: "ansarihasan1062@gmail.com",
      href: "mailto:ansarihasan1062@gmail.com",
      external: false,
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 7470507311",
      href: "tel:7470507311",
      external: false,
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/HasanAnsari12",
      href: "https://github.com/HasanAnsari12",
      external: true,
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "linkedin.com/in/hasan-ansari-96a9022b4",
      href: "https://www.linkedin.com/in/hasan-ansari-96a9022b4/",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-center mb-12"
      >
        <p className="text-[#3B82F6] font-bold tracking-widest uppercase text-xs md:text-sm mb-2">
          GET IN TOUCH
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
          Let's Work Together
        </h2>

        <p className="text-[#6B7280] mt-3 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Open to React Native developer roles, full-stack software engineering opportunities, and project collaborations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {contactItems.map((item, idx) => (
          <motion.a
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noreferrer" : undefined}
            className="water-glass-card water-glass-hover rounded-2xl p-6 border border-white/90 shadow-xs block"
          >
            <h3 className="text-[#3B82F6] text-lg font-bold mb-1 flex items-center gap-2">
              <span>{item.icon}</span> {item.title}
            </h3>

            <p className="text-[#1A1A1A] font-semibold text-base md:text-lg break-all">
              {item.value}
            </p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-center mt-10"
      >
        <p className="text-[#6B7280] font-medium mb-5 text-sm">
          📍 Bhopal, Madhya Pradesh, India
        </p>

        <a
          href="mailto:ansarihasan1062@gmail.com"
          className="btn-water-primary px-8 py-3.5 rounded-xl font-semibold text-sm md:text-base"
        >
          Send Email Direct
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
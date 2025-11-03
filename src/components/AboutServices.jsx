import React from 'react';
import { motion } from 'framer-motion';
import { Target, Palette, Code2, Users, Smartphone, ShoppingCart, Sparkles, LayoutDashboard } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } })
};

export default function AboutServices() {
  return (
    <section id="about" className="relative w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About VibeLunch</h2>
          <p className="mt-4 text-zinc-300">
            VibeLunch is a creative digital agency specializing in design, web development, and app creation. We blend strategy, technology, and aesthetics to help brands thrive online.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: 'Strategy First', desc: 'We understand your goals before we build.' },
            { icon: Palette, title: 'Pixel-Perfect Design', desc: 'Every detail matters.' },
            { icon: Code2, title: 'Seamless Tech', desc: 'We use the latest frameworks and tools.' },
            { icon: Users, title: 'Collaborative Approach', desc: 'We partner with you at every step.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div id="services" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Services
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LayoutDashboard, title: 'Web Design & Development', desc: 'Custom websites built for impact and performance.' },
              { icon: Smartphone, title: 'Mobile App Development', desc: 'iOS and Android apps that delight users.' },
              { icon: Palette, title: 'Branding & Identity', desc: 'Logos, colors, and visuals that define your vibe.' },
              { icon: Sparkles, title: 'UX/UI Design', desc: 'Beautiful, intuitive interfaces that users love.' },
              { icon: ShoppingCart, title: 'E-commerce Solutions', desc: 'Scalable online stores that sell effortlessly.' },
              { icon: Code2, title: 'Custom Integrations', desc: 'APIs, automations, and headless builds.' },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
              >
                <div className="absolute inset-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10" />
                <div className="relative z-10">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

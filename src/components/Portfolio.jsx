import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Luna Lifestyle',
    desc: 'Full-stack web design for a lifestyle brand',
    href: '#',
    gradient: 'from-indigo-500 via-fuchsia-500 to-rose-500',
  },
  {
    name: 'Orbit Finance',
    desc: 'High-performance SaaS marketing site',
    href: '#',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
  },
  {
    name: 'Mellow Coffee',
    desc: 'E-commerce store with custom UX',
    href: '#',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
  },
  {
    name: 'Peak Fitness',
    desc: 'Mobile app UI system and design kit',
    href: '#',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
  },
  {
    name: 'Nova Studio',
    desc: 'Brand identity and website refresh',
    href: '#',
    gradient: 'from-fuchsia-500 via-rose-500 to-orange-400',
  },
  {
    name: 'Atlas Travel',
    desc: 'Booking platform UX and visuals',
    href: '#',
    gradient: 'from-purple-500 via-indigo-500 to-blue-500',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
            <p className="mt-2 text-zinc-300">See what we’ve built for brands we love partnering with.</p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Start a project
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40"
            >
              <div className={`h-48 md:h-56 w-full bg-gradient-to-br ${p.gradient}`} />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-black/0 via-black/20 to-black/70" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-xs text-zinc-300">{p.desc}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'VibeLunch transformed our online presence — our new site is stunning and converts better than ever!',
            'Their creativity and attention to detail blew us away.',
            'We love working with the VibeLunch team — they just get it.'
          ].map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200"
            >
              “{quote}”
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

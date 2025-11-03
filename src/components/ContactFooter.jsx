import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Behance, Dribbble } from 'lucide-react';

export default function ContactFooter() {
  return (
    <section id="contact" className="relative w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Let’s Build Something Beautiful Together.</h2>
          <p className="mt-3 text-zinc-300">Ready to launch your next digital project? Let’s talk.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-300">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-300">Project Type</label>
                <select
                  className="mt-1 w-full rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  defaultValue="Website"
                >
                  <option>Website</option>
                  <option>App</option>
                  <option>Branding</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-zinc-300">Message</label>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
              >
                <Mail className="h-4 w-4" /> Send Message
              </button>
              <p className="text-xs text-zinc-400">We’ll get back within 1–2 business days.</p>
            </div>
          </motion.form>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="font-semibold">Connect with us</h3>
            <p className="mt-1 text-sm text-zinc-400">Follow our latest work and behind-the-scenes.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Behance, label: 'Behance', href: '#' },
                { icon: Dribbble, label: 'Dribbble', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-2 text-sm text-white hover:bg-zinc-900"
                >
                  <s.icon className="h-4 w-4" /> {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold">VibeLunch</span>
            <span className="text-zinc-500">•</span>
            <span>© {new Date().getFullYear()} VibeLunch</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm md:text-base text-zinc-200/90 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Hero() {
  return (
    <header id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-white">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 px-4 md:px-6 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold tracking-wide">VibeLunch</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
              >
                <Rocket className="h-4 w-4" /> Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0 h-full w-full">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.25),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              We build stunning websites and apps that make brands unforgettable.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl">
              At VibeLunch, we turn your brand’s vision into digital experiences that engage, inspire, and convert.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-medium text-white border border-white/10 transition-colors"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

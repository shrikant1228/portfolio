'use client'

import Image from 'next/image'
import { ArrowDown, GitBranch, Link, Mail, MapPin } from 'lucide-react'
import portrait from '@/assets/hero-portrait.jpg'

const links = ['About', 'Skills', 'Projects', 'GitHub', 'Contact']
const stats = [
  { value: '3+', label: 'Projects Shipped' },
  { value: '8.0', label: 'CGPA' },
  { value: '12+', label: 'GitHub Repos' },
  { value: '2027', label: 'Grad Year' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04070d] text-white">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-6 md:px-10">
        <header className="flex items-center justify-between gap-6 py-3">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-[#f5f5f5] uppercase">
            <span className="inline-block h-3 w-3 rounded-full bg-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.9)]" />
            <span>SHRIKANT</span>
            <span className="text-[#a1a1aa]">.OS</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#d4d4d8] md:flex">
            {links.map((link) => (
              <a key={link} href="#" className="transition hover:text-white">
                {link}
              </a>
            ))}
          </nav>

          <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-white/10">
            Let&apos;s talk
          </button>
        </header>

        <div className="grid items-center gap-14 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-16">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/40 bg-[#0f172a]/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7dd3fc]">
              <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
              Available for opportunities
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-8xl">
              Hi, I&apos;m
              <span className="mt-2 block bg-gradient-to-r from-[#c7d2fe] via-[#7c93ff] to-[#8b5cf6] bg-clip-text text-transparent">
                Shrikant.
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3 text-lg text-[#d4d4d8] md:text-2xl">
              <span className="text-[#a5b4fc]">{'{'}</span>
              <span className="font-medium text-white">Full Stack Developer</span>
              <span className="text-[#a5b4fc]">{' }'}</span>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#a1a1aa]">
              CSE student focused on <span className="font-semibold text-white">Forward Deployed Engineering</span>, building scalable web applications, and exploring <span className="font-semibold text-white">AI/ML</span> at a beginner level — one project at a time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_32px_rgba(59,130,246,0.35)] transition hover:brightness-110">
                Explore My Universe
                <ArrowDown className="h-4 w-4" />
              </button>

              <button className="rounded-xl border border-white/10 bg-transparent px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5">
                Get in Touch
              </button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div className="text-3xl font-bold tracking-[-0.05em] text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-[#a1a1aa]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -right-12 top-8 hidden rounded-full border border-white/10 bg-[#121826]/80 px-4 py-3 text-sm text-white shadow-xl backdrop-blur md:flex">
              <span className="mr-2 mt-1 h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.12em] text-[#a1a1aa]">Currently in</div>
                <div className="mt-1 flex items-center gap-2 font-medium text-white">
                  <MapPin className="h-3.5 w-3.5 text-[#93c5fd]" />
                  Bengaluru, IN
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#e8e1d8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#d9d2c8]">
                <Image
                  src={portrait}
                  alt="Shrikant Swami"
                  className="h-[420px] w-full object-cover md:h-[500px]"
                  priority
                />
              </div>
            </div>

            <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/10 bg-[#0d1320]/80 px-4 py-3 text-sm text-[#d4d4d8] shadow-2xl backdrop-blur-lg">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#a1a1aa]">whoami</span>
              </div>
              <div className="font-mono text-[#f5f5f5]">shrikant_swami</div>
              <div className="mt-2 flex items-center gap-2 text-[#a1a1aa]">
                <span className="font-mono">status</span>
                <span className="text-[#d4d4d8]">building things.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#a1a1aa]">
          <span>Scroll to explore</span>
          <div className="h-7 w-5 rounded-full border border-white/15 bg-white/5 p-1">
            <div className="mx-auto mt-1 h-2 w-1.5 rounded-full bg-white/80" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-6 flex items-center gap-3 text-white/80">
        <a href="https://github.com/shrikant1228" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <GitBranch className="h-4 w-4" />
        </a>
        <a href="https://linkedin.com/in/shrikantswami" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Link className="h-4 w-4" />
        </a>
        <a href="mailto:shrikant@example.com" className="rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

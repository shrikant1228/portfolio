'use client'

import { motion } from 'framer-motion'
import { ArrowDown, GitBranch, Link, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Shrikant</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#A1A1AA] mb-2">
            Full Stack Developer
          </p>

          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Building modern software solutions with passion for scalable
            applications, cloud infrastructure, and AI-powered systems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
              Explore My Universe
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>

            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-8">
            {[
              { icon: GitBranch, href: 'https://github.com/shrikant1228' },
              { icon: Link, href: 'https://linkedin.com/in/shrikantswami' },
              { icon: Mail, href: 'mailto:shrikant@example.com' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#18181B]/50 hover:bg-[#18181B] border border-white/5 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-[#A1A1AA] hover:text-white" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

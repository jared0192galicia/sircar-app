"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 flex items-center rounded-full p-1 transition-colors"
      style={{
        background: isDark
          ? "var(--app-subpanel)"
          : "var(--app-gray-200)",
      }}
    >
      {/* Ícono fondo (sol/luna difuso) */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs opacity-60">
        <span>🌙</span>
        <span>☀️</span>
      </div>

      {/* Bolita animada */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full shadow-md z-10 flex items-center justify-center"
        style={{
          background: "var(--app-primary)",
        }}
        animate={{
          x: isDark ? 0 : 24,
          rotate: isDark ? 0 : 180,
        }}
      >
        <motion.span
          key={theme}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="text-white text-xs"
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </button>
  )
}
import { useState } from 'react'
import { motion } from 'framer-motion'

const TABS = ['Home', 'About', 'Contact', 'Blog']

function App() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-4">
        {TABS.map((tab) => (
          <button
            className="px-3 py-1.5 relative rounded-full"
            key={tab}
            onClick={() => setHoveredTab(tab)}
          >
            {hoveredTab === tab && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-gray-800"
                transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                style={{
                  borderRadius: '9999px',
                }}
              />
            )}
            <span className="relative z-10 font-semibold text-lg text-gray-300 mix-blend-exclusion">
              {tab}
            </span>
          </button>
        ))}
      </div>
    </main>
  )
}

export default App

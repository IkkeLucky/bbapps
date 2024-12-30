'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const apps = [
  { id: 1, name: 'App 1', description: 'Description for App 1' },
  { id: 2, name: 'App 2', description: 'Description for App 2' },
  { id: 3, name: 'App 3', description: 'Description for App 3' },
  { id: 4, name: 'App 4', description: 'Description for App 4' },
]

const AppShowcase = () => {
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <motion.div
              key={app.id}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredApp(app.id)}
              onHoverEnd={() => setHoveredApp(null)}
            >
              <h3 className="text-lg font-semibold mb-2">{app.name}</h3>
              <motion.div
                className="absolute inset-0 bg-indigo-600 p-4 text-white"
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: hoveredApp === app.id ? 1 : 0, y: hoveredApp === app.id ? 0 : '100%' }}
                transition={{ duration: 0.3 }}
              >
                <p>{app.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppShowcase


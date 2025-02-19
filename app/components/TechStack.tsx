'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const technologies = [
  { name: 'React', logo: '/images/reactlogo.svg' },
  { name: 'Next.js', logo: '/images/nextjs-icon.svg' },
  { name: 'Typescript', logo: '/images/typescriptlogo.svg' },
  { name: 'MongoDB', logo: '/images/mongodblogo.svg' },
  { name: 'Nodejs', logo: '/images/nodejslogo.svg' },
  { name: 'PHP', logo: '/images/phplogo.svg' },
  { name: 'Figma', logo: '/images/figmalogo.svg' },
  { name: 'TailwindCSS', logo: '/images/tailwindlogo.svg' },
  { name: 'Wordpress', logo: '/images/wordpresslogo.svg' },


  // { name: 'TypeScript', logo: '/placeholder.svg?height=100&width=100' },
  // { name: 'Node.js', logo: '/placeholder.svg?height=100&width=100' },
  // { name: 'Python', logo: '/placeholder.svg?height=100&width=100' },
  // { name: 'Docker', logo: '/placeholder.svg?height=100&width=100' },
]

const TechStack = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollAmount = 0
    const scrollSpeed = 1
    const scrollInterval = 50

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0
      }
      carousel.scrollTo(scrollAmount, 0)
    }

    const intervalId = setInterval(scroll, scrollInterval)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Il nostro Tech Stack</h2>
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="mt-2 text-center text-sm font-medium text-gray-600">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack


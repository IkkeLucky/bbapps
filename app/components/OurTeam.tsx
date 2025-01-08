'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const teamMembers = [
  { name: 'Alessandro Di Mauro', title: 'CDA', avatar: './images/alessandrodimauro.jpg' },
  { name: 'Giorgio Koutsileos', title: 'CDA', avatar: './images/giorgiokoutsileos.jpg' },
  { name: 'Dalila Husanu', title: 'CDA', avatar: './images/dalilahusanu.jpg' },
  { name: 'Simona Pizzutto', title: 'Ufficio Personale', avatar: './images/simonapizzutto.jpg' },
  { name: 'Ignacio Marchesini', title: 'Ufficio Tecnico', avatar: './images/ignaciomarchesini.jpeg' },
  { name: 'Silvio Perono', title: 'Ufficio Aquisti', avatar: './images/silvioperono.jpg' },
]

const OurTeam = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollAmount = 0
    const scrollSpeed = 0.75
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
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Il nostro Team</h2>
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex space-x-10 overflow-x-hidden"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div key={index} className="flex-shrink-0 w-52">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto shadow-md"
                />
                <p className="mt-3 text-center text-lg font-semibold text-gray-900">{member.name}</p>
                <p className="text-center text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam


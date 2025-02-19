'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const apps = [
  {
    id: 1,
    name: "BBGestore",
    description: "Abbiamo sviluppato BBGestore pensando a un sistema gestionale utilizzabile sia dai lavoratori che, all’occorrenza, dai clienti. L'autenticazione e i profili non sono stati richiesti dal cliente in questa fase, ma possono essere integrati in futuro. È prevista anche l'implementazione di un sistema di appuntamenti mobile o di una funzionalità di notifica, anch'essa non richiesta dall’attuale cliente ma disponibile come opzione futura",
    imageUrl: "/images/bbgestore.png",
    url: "https://bbgestore123gestore.vercel.app/"
  },
  {
    id: 2,
    name: "BBImpianti",
    description: "Questa applicazione è progettata per gestire modelli, piani e attività in cantieri e spazi di costruzione. È collegata direttamente a un'app mobile che consente ai lavoratori di registrare quotidianamente le loro attività sul campo, oltre a facilitare la gestione e l’organizzazione di nuove attività attraverso il sito web. È stata creata per consentire una gestione fluida e integrata di lavoratori e cantieri",
    imageUrl: "/images/bbimpianti.png",
    url: "#"
  },
  {
    id: 3,
    name: "Maemories",
    description: "Maemories è stata concepita per replicare il modello di un social network. Questa applicazione, in futuro, mirerà a creare una piattaforma in cui gli utenti potranno condividere esperienze personali e commemorare i propri cari all’interno di una comunità stretta, offrendo supporto e ascolto reciproco. Attualmente in fase di sviluppo, Maemories rappresenta un progetto con un grande potenziale per il futuro",
    imageUrl: "/images/bbsocialnetwork.png",
    url: "https://maemories.com/"
  },
  {
    id: 4,
    name: "Sito ufficiale BarbaraB",
    description: "Questo è il sito ufficiale di BarbaraB, dove è possibile scoprire chi siamo, cosa facciamo ogni giorno e approfondire la nostra documentazione, la nostra etica del lavoro e la nostra mentalità. Ti consigliamo di iniziare da qui se desideri conoscere a fondo la nostra realtà e le opportunità che possiamo offrirti",
    imageUrl: "/images/bbwebsite.png",
    url: "https://coopbarbarab.it/"
  },
  {
    id: 5,
    name: "Ecoapp e agenda dei rifiuti",
    description: "EcoApp e l’agenda funeraria sono applicazioni create per funzionare come database e registro giornaliero, utili per monitorare i lavori svolti quotidianamente. Includono un sistema di calendario per verificare i dati inseriti dai lavoratori relativi alle attività di pulizia e smaltimento dei rifiuti in ciascuna area di lavoro. Entrambe sono ancora in fase di sviluppo, con il lancio previsto a breve con nuove funzionalità e una struttura più completa",
    imageUrl: "/images/ecoappeagenda.png",
    url: "#"
  },
  {
    id: 6,
    name: "Sito Formazione BarbaraB",
    description: "Il Sito Formazione è un portale dedicato alla formazione e all’apprendimento per i nostri lavoratori attuali e futuri. È pensato per certificare le competenze dei dipendenti secondo le normative italiane, garantendo che siano preparati legalmente per le mansioni richieste. Il sito è in fase di sviluppo, con l'integrazione dei sistemi di autenticazione, quiz e logiche d’esame. Il lancio è previsto per il 2025 o il 2026, in linea con le più recenti normative educative italiane",
    imageUrl: "/images/sitoformazione.png",
    url: "https://formazione.farewellcmt.it/"
  },
]

const AppShowcase = () => {
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)

  return (
    <section id="app-showcase" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <Link href={app.url} target='_blank' key={app.id} passHref>
              <motion.div
                className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-[400px]"
                onHoverStart={() => setHoveredApp(app.id)}
                onHoverEnd={() => setHoveredApp(null)}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={app.imageUrl}
                  alt={app.name}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="absolute inset-0 bg-black opacity-40 z-10" />
                <div className="relative z-20 p-6 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{app.name}</h3>
                </div>
                <motion.div
                  className="absolute inset-0 bg-primary p-6 flex flex-col justify-center z-30"
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ 
                    opacity: hoveredApp === app.id ? 1 : 0, 
                    y: hoveredApp === app.id ? 0 : '100%' 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white">{app.name}</h3>
                  <p className="text-white text-base">{app.description}</p>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppShowcase


import { useEffect, useRef, useState } from 'react'

const HERO = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%231a5fa8'/%3E%3Ctext x='400' y='210' font-size='28' fill='white' text-anchor='middle'%3EVélo électrique pliable%3C/text%3E%3C/svg%3E"

const TOTAL_ITERATIONS = 400_000_000
const CHUNK_SIZE = 2_000_000

export default function App() {
  const [showBanner, setShowBanner] = useState(false)
  const [points, setPoints] = useState<number | null>(null)
  const [enCours, setEnCours] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    // CLS #2 : le bandeau est toujours dans le flux, seule son opacité change.
    // Son apparition ne décale donc plus le contenu.
    const t = setTimeout(() => setShowBanner(true), 1200)
    return () => clearTimeout(t)
  }, [])

  // Annule un calcul en cours si le composant est démonté.
  useEffect(() => () => clearTimeout(timer.current), [])

  function calculerPoints() {
    // INP : le calcul est découpé en tranches, séparées par setTimeout(0),
    // pour rendre la main au navigateur entre chaque tranche.
    if (enCours) return
    setEnCours(true)
    let total = 0
    let i = 0

    function step() {
      const end = Math.min(i + CHUNK_SIZE, TOTAL_ITERATIONS)
      for (; i < end; i++) total += Math.sqrt(i) % 7
      if (i < TOTAL_ITERATIONS) {
        timer.current = window.setTimeout(step, 0)
      } else {
        setPoints(Math.round(total % 1000))
        setEnCours(false)
      }
    }
    step()
  }

  return (
    <div className="page">
      <div
        className={`banner${showBanner ? ' banner--visible' : ''}`}
        aria-hidden={!showBanner}
      >
        🎉 Livraison offerte ce week-end !
      </div>

      <h1>CycloShop</h1>

      {/* CLS #1 : dimensions explicites → espace réservé avant le chargement */}
      <img
        src={HERO}
        alt="Vélo électrique pliable"
        width={800}
        height={400}
        style={{ aspectRatio: '800 / 400', width: '100%', height: 'auto' }}
      />

      <p>Le vélo électrique pliable le plus vendu de la boutique.</p>

      <button onClick={calculerPoints} disabled={enCours}>
        {enCours ? 'Calcul en cours…' : 'Calculer mes points fidélité'}
      </button>
      <p aria-live="polite">
        {points !== null && !enCours ? `Tu as ${points} points fidélité.` : ''}
      </p>
    </div>
  )
}

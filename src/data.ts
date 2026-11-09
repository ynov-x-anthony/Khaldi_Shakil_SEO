export type Product = {
  id: number
  slug: string
  name: string
  price: number
  description: string
}

export const products: Product[] = [
  { id: 1, slug: 'velo-electrique-pliable', name: 'Vélo électrique pliable', price: 899,
    description: "Autonomie 60km, pliable en 10 secondes, livraison offerte." },
  { id: 2, slug: 'trottinette-tout-terrain', name: 'Trottinette tout-terrain', price: 549,
    description: "Pneus gonflables 10 pouces, suspension avant/arrière." },
  { id: 3, slug: 'casque-velo-connecte', name: 'Casque vélo connecté', price: 129,
    description: "Feux de signalisation intégrés, alerte de chute automatique." },
]

import { useEffect, useState } from 'react'
import { api } from '../services/api'

export interface Navire {
  id: number
  navire: string
  omi: number | null
  compagnie: string | null
  type_navire: string | null
  annee_construction: number | null
  longueur_m: number | null
  largeur_m: number | null
  tirant_eau_max_m: number | null
  capacite_passagers: number | null
  gnl: string | null
  propulsion_carburant: string | null
}

export function useNavires() {
  const [navires, setNavires] = useState<Navire[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    api
      .get<Navire[]>('/navires')
      .then((data) => {
        if (!cancelled) setNavires(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Erreur inconnue')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { navires, loading, error }
}

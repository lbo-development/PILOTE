import { supabase } from '../config/supabaseClient.js'

/**
 * Table "navires" du schéma "escales" (référentiel des navires du GPMM).
 */

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
  ops_installe: boolean | null
  commissionne: boolean | null
  gnl: string | null
  propulsion_carburant: string | null
  created_at: string
  updated_at: string
}

export async function findAll(): Promise<Navire[]> {
  const { data, error } = await supabase
    .schema('escales')
    .from('navires')
    .select('*')
    .order('navire', { ascending: true })
  if (error) throw error
  return data ?? []
}

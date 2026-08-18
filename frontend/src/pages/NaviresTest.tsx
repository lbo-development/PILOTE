import { useNavires } from '../hooks/useNavires'

/**
 * Page technique de test — vérifie que les données "escales.navires"
 * remontent bien depuis le backend. Rendu volontairement hors design
 * system GPMM (voir ForClaude/INSTRUCTIONS_UX.md) : à refaire selon les
 * composants gp-* avant toute mise en production.
 */
export function NaviresTest() {
  const { navires, loading, error } = useNavires()

  if (loading) return <p>Chargement…</p>
  if (error) return <p>Erreur : {error}</p>

  return (
    <div>
      <h1>Navires (test) — {navires.length} résultats</h1>
      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Navire</th>
            <th>OMI</th>
            <th>Compagnie</th>
            <th>Type</th>
            <th>Année</th>
            <th>Longueur (m)</th>
            <th>Passagers</th>
            <th>GNL</th>
          </tr>
        </thead>
        <tbody>
          {navires.map((n) => (
            <tr key={n.id}>
              <td>{n.navire}</td>
              <td>{n.omi}</td>
              <td>{n.compagnie}</td>
              <td>{n.type_navire}</td>
              <td>{n.annee_construction}</td>
              <td>{n.longueur_m}</td>
              <td>{n.capacite_passagers}</td>
              <td>{n.gnl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

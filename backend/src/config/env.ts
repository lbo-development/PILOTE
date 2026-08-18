import 'dotenv/config'

/**
 * Centralise la lecture des variables d'environnement.
 * Toute nouvelle variable doit être ajoutée ici (et dans .env.example),
 * jamais lue directement via process.env ailleurs dans le code.
 */
export const env = {
  port: process.env.PORT ? Number(process.env.PORT) : 3001,
  supabaseUrl: process.env.SUPABASE_URL ?? '',
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  nodeEnv: process.env.NODE_ENV ?? 'development',
}

if (!env.supabaseUrl || !env.supabaseServiceRoleKey) {
  console.warn(
    '[config] SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant(e) — copie .env.example vers .env et renseigne tes clés Supabase.',
  )
}

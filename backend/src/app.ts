import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import { notFound } from './middlewares/notFound.js'
import { errorHandler } from './middlewares/errorHandler.js'

/**
 * Assemble l'application Express sans démarrer de serveur HTTP.
 * Séparé de server.ts pour pouvoir importer `app` dans les tests
 * (Supertest) sans ouvrir de port réseau.
 */
export const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routes)

// Sert le build du frontend (déploiement en service unique Railway) quand il
// existe. En dev, frontend/dist n'existe pas — le frontend est servi par Vite
// sur son propre port, ce bloc est alors ignoré.
const frontendDistPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../frontend/dist',
)

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath))

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next()
    res.sendFile(path.join(frontendDistPath, 'index.html'))
  })
}

app.use(notFound)
app.use(errorHandler)

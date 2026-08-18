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

app.get('/', (_req, res) => {
  res.json({ message: 'PILOT API' })
})

app.use('/', routes)

app.use(notFound)
app.use(errorHandler)

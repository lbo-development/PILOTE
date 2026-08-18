import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app.js'

describe('GET /api/health', () => {
  it('répond 200 avec un statut ok', async () => {
    const res = await request(app).get('/api/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
    expect(res.body.timestamp).toBeDefined()
  })
})

describe('GET /api/unknown-route', () => {
  it('répond 404 sur une route inconnue', async () => {
    const res = await request(app).get('/api/unknown-route')
    expect(res.status).toBe(404)
  })
})

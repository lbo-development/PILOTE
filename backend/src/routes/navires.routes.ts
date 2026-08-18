import { Router } from 'express'
import { getNavires } from '../controllers/navires.controller.js'

const router = Router()

router.get('/', getNavires)

export default router

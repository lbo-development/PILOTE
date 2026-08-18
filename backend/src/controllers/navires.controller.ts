import type { NextFunction, Request, Response } from 'express'
import * as naviresService from '../services/navires.service.js'

export async function getNavires(_req: Request, res: Response, next: NextFunction) {
  try {
    const navires = await naviresService.listNavires()
    res.json(navires)
  } catch (err) {
    next(err)
  }
}

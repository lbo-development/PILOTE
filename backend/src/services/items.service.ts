import * as itemsRepository from '../repositories/items.repository.js'
import { AppError } from '../middlewares/errorHandler.js'

/**
 * Couche métier : validation, règles de gestion, orchestration.
 * Ne contient aucun appel direct à Supabase — délègue toujours au repository.
 */

export function listItems() {
  return itemsRepository.findAll()
}

export function createItem(name: string) {
  if (!name || name.trim().length === 0) {
    throw new AppError('Le champ "name" est requis', 400)
  }
  return itemsRepository.create(name.trim())
}

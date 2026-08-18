import * as naviresRepository from '../repositories/navires.repository.js'

export function listNavires() {
  return naviresRepository.findAll()
}

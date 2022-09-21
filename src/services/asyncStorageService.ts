// import axios, { AxiosError, AxiosResponse } from 'axios'

import { Post } from '../models'

export const storageService = {
  query,
  sendImpresion,
  put,
  get,
}

function query(entityType: string, filterBy: any = null) {
  const pageNumber = filterBy?.pageNumber

  let entities!: Post[]

  if (typeof entityType === 'string') {
    var stringifyData = localStorage.getItem(entityType)

    if (stringifyData) entities = JSON.parse(stringifyData) || []
  }
  if (filterBy) {
    entities = entities.slice(pageNumber * 6, pageNumber * 6 + 6)
  }
  return Promise.resolve(entities)
}

async function get(entityType: string, entityId: string) {
  const entities = await query(entityType)
  return entities.find((entity: Post) => entity.id === entityId)
}

function put(entityType: string, updatedEntity: Post) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === updatedEntity.id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function _save(entityType: string, entities: Post[]) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function sendImpresion(userId: string, itemId: string) {
  // axios
  //   .post(`https://www.tedooo.com/`, {
  //     params: { userId, itemId },
  //   })
  //   .then((res: AxiosResponse) => {
  //     console.log(res)
  //   })
  //   .catch((err: AxiosError) => {
  //     console.log(err)
  //   })
}

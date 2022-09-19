// import axios from 'axios'

import { Post } from '../models'

export const storageService = {
  query,
  sendImpresion,
}

function query(entityType: string, filterBy: any = null) {
  const pageNumber = filterBy?.pageNumber

  if (typeof entityType === 'string') {
    var stringifyData = localStorage.getItem(entityType)

    if (stringifyData) var entities = JSON.parse(stringifyData) || []
  }
  if (filterBy) {
    entities = entities.slice(pageNumber * 6, pageNumber * 6 + 6)
  }
  return Promise.resolve(entities)
}

function sendImpresion(userId: string, itemId: string) {
  // axios
  //   .post(`https://www.tedooo.com/`, {
  //     params: { userId, itemId },
  //   })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
}

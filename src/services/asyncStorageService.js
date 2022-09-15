import axios from 'axios'

export const storageService = {
  query,
  sendImpresion,
}

function query(entityType, filterBy = null) {
  const pageNumber = filterBy?.pageNumber
  var entities = JSON.parse(localStorage.getItem(entityType)) || []
  if (filterBy) {
    entities = entities.slice(pageNumber * 6, pageNumber * 6 + 6)
  }
  return Promise.resolve(entities)
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 8) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

function sendImpresion(userId, itemId) {
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

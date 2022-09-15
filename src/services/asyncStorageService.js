// import axios from 'axios'

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

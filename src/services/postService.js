import { utilService } from './utilService.js'
import { storageService } from './asyncStorageService.js'

import postsData from '../data/posts.json'

export const postService = {
  query,
  getPostsLength,
  sendImpressionFromUser,
}

const STORAGE_KEY = 'posts'

_createPosts()

function query(filterBy = null) {
  return storageService.query(STORAGE_KEY, filterBy)
}
async function getPostsLength() {
  const posts = await storageService.query(STORAGE_KEY)
  return posts.length
}

function _createPosts() {
  let posts = utilService.loadFromStorage(STORAGE_KEY)
  if (!posts || !posts.length) {
    posts = postsData.data
    utilService.saveToStorage(STORAGE_KEY, posts)
  }
  return posts
}

function sendImpressionFromUser(userId, itemId) {
  return storageService.sendImpresion(userId, itemId)
}

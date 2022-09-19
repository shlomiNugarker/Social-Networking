import { utilService } from './utilService'
import { storageService } from './asyncStorageService'

import postsData from '../data/posts.json'
import { Post } from '../models.js'

export const postService = {
  query,
  getPostsLength,
  sendImpressionFromUser,
}

const STORAGE_KEY = 'posts'

_createPosts()

function query(filterBy: any | null = null) {
  return storageService.query(STORAGE_KEY, filterBy)
}
async function getPostsLength() {
  const posts: Post[] = await storageService.query(STORAGE_KEY)
  return posts.length
}

function _createPosts() {
  let posts: Post[] | any[] = utilService.loadFromStorage(STORAGE_KEY)
  if (!posts || !posts.length) {
    posts = postsData.data
    utilService.saveToStorage(STORAGE_KEY, posts)
  }
  return posts
}

function sendImpressionFromUser(userId: string, itemId: string) {
  return storageService.sendImpresion(userId, itemId)
}

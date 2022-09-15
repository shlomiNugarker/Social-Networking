import { postService } from '../../services/postService'

export function setCurrPage(page) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: 'SET_CURR_PAGE', page })
    } catch (err) {
      console.log('err:', err)
    }
  }
}
export function setNextPage(page) {
  return async (dispatch, getState) => {
    try {
      const { pageNumber } = getState().postModule
      dispatch({ type: 'SET_NEXT_PAGE', pageNumber: pageNumber + 1 })
    } catch (err) {
      console.log('err:', err)
    }
  }
}
export function setNextPageToZero() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: 'SET_NEXT_PAGE', pageNumber: 0 })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function getPostsLength() {
  return async (dispatch, getState) => {
    try {
      const postsLength = await postService.getPostsLength()
      dispatch({ type: 'SET_POSTS_LENGTH', postsLength })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function loadPosts() {
  return async (dispatch, getState) => {
    try {
      const { pageNumber } = getState().postModule
      const filterBy = { pageNumber }
      const posts = await postService.query(filterBy)
      dispatch({ type: 'SET_POSTS', posts })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function addPosts() {
  return async (dispatch, getState) => {
    try {
      const { posts } = getState().postModule
      const { postsLength } = getState().postModule

      if (posts.length === postsLength) return

      const { pageNumber } = getState().postModule
      const filterBy = { pageNumber }
      const postsToAdd = await postService.query(filterBy)
      dispatch({ type: 'ADD_POSTS', posts: postsToAdd })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function sendImpressionFromUser(userId, itemId) {
  return async (dispatch, getState) => {
    try {
      await postService.sendImpressionFromUser(userId, itemId)
    } catch (err) {
      console.log('err:', err)
    }
  }
}

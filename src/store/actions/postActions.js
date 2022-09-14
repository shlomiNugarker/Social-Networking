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
export function setNextPage() {
  return async (dispatch, getState) => {
    try {
      const { pageNumber } = getState().postModule
      dispatch({ type: 'SET_NEXT_PAGE', pageNumber: pageNumber + 1 })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function getPostsLength() {
  return async (dispatch, getState) => {
    try {
      const posts = await postService.query()
      dispatch({ type: 'SET_POSTS_LENGTH', postsLength: posts.length })
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
      const { pageNumber } = getState().postModule
      const filterBy = { pageNumber }
      const posts = await postService.query(filterBy)
      console.log(posts)
      dispatch({ type: 'ADD_POSTS', posts })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

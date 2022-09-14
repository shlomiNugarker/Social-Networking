import { postService } from '../../services/postService'

export function setCurrPage(page) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_CURR_PAGE', page })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function loadPosts() {
  return async (dispatch, getState) => {
    try {
      const posts = await postService.query()
      dispatch({ type: 'SET_POSTS', posts })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

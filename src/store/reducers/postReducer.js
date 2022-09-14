const INITIAL_STATE = {
  posts: null,
  currPage: null,
}

export function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CURR_PAGE':
      console.log('SET_CURR_PAGE')
      return {
        ...state,
        currPage: action.page,
      }
    case 'SET_POSTS':
      console.log('SET_POSTS', action.posts)
      return {
        ...state,
        posts: [...action.posts],
      }
    default:
      return state
  }
}

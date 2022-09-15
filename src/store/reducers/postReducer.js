const INITIAL_STATE = {
  loggedInUser: {
    id: 'u-12345',
    fullname: 'shlomi Nugarker',
    username: 'shlomi123',
    avatar:
      'https://images.unsplash.com/photo-1663011109441-6948af4a0b80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  posts: null,
  currPage: '',
  pageNumber: 0,
  postsLength: null,
}

export function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CURR_PAGE':
      return {
        ...state,
        currPage: action.page,
      }
    case 'SET_POSTS_LENGTH':
      return {
        ...state,
        postsLength: action.postsLength,
      }
    case 'SET_NEXT_PAGE':
      return {
        ...state,
        pageNumber: action.pageNumber,
      }
    case 'SET_POSTS':
      return {
        ...state,
        posts: [...action.posts],
      }
    case 'ADD_POSTS':
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
      }
    default:
      return state
  }
}

import { ActionType } from '../typesActions/index'
import { Action } from '../interfacesAction/index'
import { Post } from '../../models'

interface initialState {
  posts: Post[] | null
  currPage?: string
  pageNumber?: number
  postsLength: number | null
  loggedInUser: {
    id: string
    fullname: string
    username: string
    avatar?: string
  }
}

const INITIAL_STATE: initialState = {
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

export function postReducer(
  state = INITIAL_STATE,
  action: Action
): initialState {
  switch (action.type) {
    case ActionType.setCurrPage:
      return {
        ...state,
        currPage: typeof action.page === 'string' ? action.page : '',
      }
    case ActionType.getPostsLength:
      return {
        ...state,
        postsLength: action.postsLength,
      }
    case ActionType.setNextPage:
      return {
        ...state,
        pageNumber: action.pageNumber,
      }
    case ActionType.loadPosts:
      return {
        ...state,
        posts: [...action.posts],
      }
    case ActionType.addPosts:
      return {
        ...state,

        posts: state.posts ? [...state.posts, ...action.posts] : null,
      }
    default:
      return state
  }
}

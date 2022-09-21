import { ActionType } from '../typesActions'
import { Post } from '../../models'

interface SetCurrPageAction {
  type: ActionType.setCurrPage
  page: string | number
}
interface SetNextPageAction {
  type: ActionType.setNextPage
  pageNumber?: number
}

interface SetNextPageToZeroAction {
  type: ActionType.setNextPageToZero
  pageNumber?: number
}

interface GetPostsLengthAction {
  type: ActionType.getPostsLength
  postsLength: number
}
interface AddPostsAction {
  type: ActionType.addPosts
  posts: Post[]
}
interface addLikeAction {
  type: ActionType.savePost
  post: Post
}
interface LoadPostsAction {
  type: ActionType.loadPosts
  posts: Post[]
}
interface SendImpressionFromUserAction {
  type: ActionType.sendImpressionFromUser
}

export type Action =
  | SetCurrPageAction
  | SetNextPageAction
  | SetNextPageToZeroAction
  | GetPostsLengthAction
  | AddPostsAction
  | LoadPostsAction
  | SendImpressionFromUserAction
  | addLikeAction

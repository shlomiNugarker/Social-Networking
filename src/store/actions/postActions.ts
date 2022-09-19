import { Dispatch } from 'redux'
import { postService } from '../../services/postService'
import { Post } from '../../models'
import { ActionType } from '../typesActions/index'

import { Action } from '../interfacesAction/index'

export function setCurrPage(page: string) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.setCurrPage, page })
    } catch (err) {
      console.log('err:', err)
    }
  }
}
export function setNextPage(page?: number) {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    try {
      const { pageNumber } = getState().postModule
      dispatch({ type: ActionType.setNextPage, pageNumber: pageNumber + 1 })
    } catch (err) {
      console.log('err:', err)
    }
  }
}
export function setNextPageToZero() {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.setNextPage, pageNumber: 0 })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function getPostsLength() {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const postsLength = await postService.getPostsLength()
      dispatch({ type: ActionType.getPostsLength, postsLength })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function loadPosts() {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    try {
      const { pageNumber } = getState().postModule
      const filterBy: any = { pageNumber }
      const posts = await postService.query(filterBy)
      dispatch({ type: ActionType.loadPosts, posts })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function addPosts() {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    try {
      const { posts } = getState().postModule
      const { postsLength } = getState().postModule

      if (posts.length === postsLength) return

      const { pageNumber } = getState().postModule
      const filterBy: any = { pageNumber }
      const postsToAdd: Post[] = await postService.query(filterBy)
      dispatch({ type: ActionType.addPosts, posts: postsToAdd })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function sendImpressionFromUser(userId: string, itemId: string) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await postService.sendImpressionFromUser(userId, itemId)
    } catch (err) {
      console.log('err:', err)
    }
  }
}

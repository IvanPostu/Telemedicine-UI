import { ThunkDispatch } from 'redux-thunk'
import {
  FetchPostsActionType,
  AddPostsActionType,
  StartFetchActionType,
  StopFetchActionType,
  AddImageToPostActionType,
  Post,
  postsActionTypeConstants as T,
} from './types'
import { GlobalStateType } from '@/store'
import { Action } from 'redux'

type AsyncActionCreatorType<T extends Action> = (
  dispatch: ThunkDispatch<GlobalStateType, unknown, T>,
  getState: () => GlobalStateType,
) => void

function addPostsActionCreator(posts: Array<Post>): AddPostsActionType {
  return {
    type: T.ADD_POSTS,
    payload: posts,
  }
}

function startFetchActionCreator(): StartFetchActionType {
  return {
    type: T.START_LOAD,
  }
}

function stopFetchActionCreator(): StopFetchActionType {
  return {
    type: T.STOP_LOAD,
  }
}

function addImageToPostActionCreator(id: number, base64Image: string): AddImageToPostActionType {
  return {
    type: T.ADD_IMAGE_FOR_POST,
    payload: {
      base64Image,
      id,
    },
  }
}

export function fetchNewPosts(): AsyncActionCreatorType<FetchPostsActionType> {
  return async (
    dispatch: ThunkDispatch<
      GlobalStateType,
      unknown,
      | FetchPostsActionType
      | AddPostsActionType
      | StartFetchActionType
      | StopFetchActionType
      | AddImageToPostActionType
    >,
    getState: () => GlobalStateType,
  ) => {
    try {
      const pageNumber = getState().postsReducer.currentPage
      const postsPerPage = getState().postsReducer.POSTS_PER_PAGE
      dispatch(startFetchActionCreator())
      const serverResponse = await fetch(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=${postsPerPage}`,
      )
      console.log(`FETCH: https://picsum.photos/v2/list?page=${pageNumber}&limit=${postsPerPage}`)

      if (serverResponse.status === 200 && serverResponse.ok) {
        const data = await serverResponse.json()

        const postsArray: Array<Post> = []
        for (let i = 0; i < data.length; i++) {
          const item = data[i]
          postsArray.push({
            author: item.author,
            base64Image: '',
            downloadImageUrl: item['download_url'],
            id: Number(item.id),
            webUrl: item['url'],
          })
        }

        dispatch(addPostsActionCreator(postsArray))
        postsArray.forEach(async (a) => {
          const serverResponse = await fetch(`https://picsum.photos/id/${a.id}/320/240`)
          if (serverResponse.ok && serverResponse.status === 200) {
            const bufferImage = await serverResponse.blob()
            const reader = new FileReader()
            reader.readAsDataURL(bufferImage)
            reader.onloadend = function () {
              const dataUrl = reader.result as string
              const base64 = dataUrl.split(',')[1]
              dispatch(addImageToPostActionCreator(a.id, base64))
            }
          } else {
            console.warn(`Fetch image error, status=${serverResponse.status}`)
          }
        })
      }

      dispatch(stopFetchActionCreator())
    } catch (error) {
      dispatch(stopFetchActionCreator())
      console.error(error)
    }
  }
}

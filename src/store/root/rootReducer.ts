import { combineReducers } from 'redux'
import { postsReducer } from '@/store/Posts/postsReducer'
import { notificationsReducer } from '../Notifications/notificationsReducer'

const rootReducer = combineReducers({ postsReducer, notificationsReducer })

export default rootReducer

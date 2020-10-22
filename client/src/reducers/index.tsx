import {combineReducers} from 'redux'
import playerReducer from './playerReducer'
import queryReducer from './queryReducer'

export default combineReducers({
    player: playerReducer,
    query: queryReducer
})
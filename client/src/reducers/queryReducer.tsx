import initialState from "../store/initialState"
import { SET_QUERY } from "../actions/types"
import {IAppState, IAction} from "../interfaces"

export default function queryReducer(state: IAppState, action: IAction) {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
            default:
                return state
    }
}
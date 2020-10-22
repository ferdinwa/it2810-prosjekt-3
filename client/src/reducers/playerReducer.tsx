import {GET_PLAYERS, PLAYERS_LOADING} from '../actions/types'
import {IAppState, IAction} from '../interfaces'
import initialState from '../store/initialState'



//type Actions = 
//| ReturnType<typeof AddPlayer> | ReturnType<typeof RemovePlayer>

export default function playerReducer(
    state: IAppState = initialState, 
    action: IAction
    ){
    switch (action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload,
                loading: false
            }
        case PLAYERS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
    

import {GET_PLAYERS, PLAYERS_LOADING} from '../actions/types'
import {IAppState, IAction} from '../interfaces'


const initialState = {
    players: [],
    loading: false
}

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
    

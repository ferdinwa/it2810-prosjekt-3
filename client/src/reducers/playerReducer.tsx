import {GET_PLAYERS, PLAYERS_LOADING} from '../actions/types'
import {IAppState, IAction} from '../interfaces'


const initialState = {
    players: [
        {id: "1", name: 'Pelé'}, 
        {id: "2", name: 'Maradona'},
        {id: "3", name: 'Ronald0'},
        {id: "4", name: 'Tor Hogne Aa(røy)'},
        {id: "5", name: 'Dovlandović'}, 
        {id: "6", name: 'Ferdinandinho'},
    ],
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
                ...state
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
    

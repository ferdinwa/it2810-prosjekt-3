import {GET_PLAYERS, PLAYERS_LOADING } from '../actions/types'




export function getPlayers() {
    return {
        type: GET_PLAYERS
    } as const
}

export const setPlayersLoading = () => {
    return {
        type: PLAYERS_LOADING
    }

}



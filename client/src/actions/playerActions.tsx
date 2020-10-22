import axios from 'axios'
import {GET_PLAYERS, PLAYERS_LOADING } from '../actions/types'

export const getPlayers = () => (dispatch : Function) => {
    dispatch(setPlayersLoading())
    axios
        .get("/api/players")
        .then(res =>
            dispatch({
                type: GET_PLAYERS,
                payload: res.data
            }))
    
}

export const setPlayersLoading = () => {
    return {
        type: PLAYERS_LOADING
    }

}



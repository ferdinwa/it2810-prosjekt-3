import { SET_QUERY } from "./types"

export const setQuery = (query: string) => (dispatch: Function) => {
    dispatch({
        type: SET_QUERY,
        payload: query
    })
}
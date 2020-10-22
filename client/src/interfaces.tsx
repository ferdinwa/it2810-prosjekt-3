export interface IPlayer {
    id: string;
    name: string
    age: string
    height: string
    position: string
    club: string
    nation: string
}

export interface IPlayerReduxProps {
    player: {
        players: IPlayer[]
    }
}

export interface IQueryReduxProps {
    query: string
}


export interface IAction {
    type: string
    payload?: any
    new?: any
}

export interface IScroller {
    player: {
        players: IPlayer[]
    }
    getPlayers(): void
}

export interface ISearchBar {
    setQuery(query: string): void
}

export interface IAppState {
    players: {
        players: IPlayer[]
        loading: boolean
}
    query: {
        query: string
    }
    
}


export interface IPlayer {
    id: string;
    name: string
}

export interface IPlayerReduxProps {
    player: {
        players: IPlayer[]
    }
}

export interface IPlayer {
    id: string;
    name: string
}

export interface IAction {
    type: string
    payload?: any
}

export interface IScroller {
    player: {
        players: IPlayer[]
    }
    getPlayers(): void
}

export interface IAppState {
    players: IPlayer[]
    loading: boolean
}
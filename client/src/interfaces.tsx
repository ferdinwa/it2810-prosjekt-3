export interface IPlayer {
  id: string;
  name: string;
  age: string;
  height: string;
  position: string;
  club: string;
  nation: string;
  rating: number;
}

export interface IPlayerReduxProps {
  player: {
    players: IPlayer[];
  };
}

export interface IQueryReduxProps {
  query: string;
}

export interface IAction {
  type: string;
  payload?: any;
  new?: any;
}

export interface IScroller {
  players: IPlayer[];
  //getPlayers: (query: string) => void
}

export interface ISearchBar {
  setQuery(query: string): void;
}

export interface IAppState {
  players: {
    players: IPlayer[];
    loading: boolean;
  };
    query: string;
}

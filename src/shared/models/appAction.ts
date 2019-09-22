import { PokemonAction } from '../../Pokemon/reducers/pokemonReducer';

export interface Action<T, P = null> {
    type: T;
    payload: P;
}

export type AppAction = PokemonAction;

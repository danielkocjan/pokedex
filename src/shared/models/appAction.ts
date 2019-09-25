import { PokemonAction } from '../../Pokemon/actions/pokemonActions';

export interface Action<T, P = null> {
    type: T;
    payload: P;
}

export type AppAction = PokemonAction;

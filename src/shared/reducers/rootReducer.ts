import { combineReducers } from 'redux';

import { pokemonReducer, PokemonState } from '../../Pokemon/reducers/pokemonReducer';
import { AppAction } from '../models/appAction';

export interface AppState {
    pokemon: PokemonState;
}

export const rootReducer = combineReducers<AppState, AppAction>({
    pokemon: pokemonReducer,
});

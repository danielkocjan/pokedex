import { PokemonData } from '../models/pokemonModels';
import { AppAction } from '../../shared/models/appAction';

export interface PokemonState {
    pokemons: PokemonData[];
}

const initialState: PokemonState = {
    pokemons: [],
};

export const pokemonReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

import { PokemonData, Pokemon } from '../models/pokemonModels';
import { AppAction } from '../../shared/models/appAction';
import { PaginatedResponse } from '../../shared/models/httpModels';
import * as getPokemons from '../actions/getPokemonsActions';
import { GetPokemonsActions } from '../actions/getPokemonsActions';

export interface PokemonState {
    pagination: PaginatedResponse<Pokemon>;
    pokemons: PokemonData[];
    isFetching: boolean;
}

const initialState: PokemonState = {
    pagination: {
        count: 0,
        results: [],
    },
    pokemons: [],
    isFetching: false,
};

export type PokemonAction = GetPokemonsActions;

export const pokemonReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case getPokemons.GET_POKEMONS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case getPokemons.GET_POKEMONS_SUCCESS: {
            console.log(action.payload);
            return {
                ...state,
                pagination: action.payload,
                isFetching: false,
            };
        }

        case getPokemons.GET_POKEMONS_FAILURE:
            return {
                ...state,
                isFetching: false,
            };

        default:
            return state;
    }
};

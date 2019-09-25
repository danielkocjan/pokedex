import { PokemonData, PokemonPagination } from '../models/pokemonModels';
import { AppAction } from '../../shared/models/appAction';
import * as actions from '../actions/pokemonActions';

export interface PokemonState {
    pagination: PokemonPagination;
    pokemonsData: PokemonData[];
}

const initialState: PokemonState = {
    pagination: {
        count: 0,
        page: 1,
        results: [],
    },
    pokemonsData: [],
};

export const pokemonReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case actions.GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pagination: { ...state.pagination, ...action.payload },
                isFetching: false,
            };

        case actions.SET_NEXT_PAGE:
            return {
                ...state,
                pagination: { ...state.pagination, page: state.pagination.page + 1 },
            };

        case actions.SET_PREVIOUS_PAGE:
            return {
                ...state,
                pagination: { ...state.pagination, page: state.pagination.page - 1 },
            };

        case actions.GET_POKEMON_DATA_SUCCESS:
            return {
                ...state,
                pokemonsData: [...state.pokemonsData, action.payload],
                isFetching: false,
            };

        default:
            return state;
    }
};

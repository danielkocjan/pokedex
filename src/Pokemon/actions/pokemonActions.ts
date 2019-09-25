import { PokemonData, Pokemon } from '../models/pokemonModels';
import { Action } from '../../shared/models/appAction';
import { PaginatedResponse } from '../../shared/models/httpModels';

export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
type GetPokemonsSuccess = Action<typeof GET_POKEMONS_SUCCESS, PaginatedResponse<Pokemon>>;
export const getPokemonsSuccess = (pokemons: PaginatedResponse<Pokemon>) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: pokemons,
});

export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
type SetNextPage = Action<typeof SET_NEXT_PAGE>;
export const setNextPage = () => ({
    type: SET_NEXT_PAGE,
});

export const SET_PREVIOUS_PAGE = 'SET_PREVIOUS_PAGE';
type SetPreviousPage = Action<typeof SET_PREVIOUS_PAGE>;
export const setPreviousPage = () => ({
    type: SET_PREVIOUS_PAGE,
});

export const GET_POKEMON_DATA_SUCCESS = 'GET_POKEMON_DATA_SUCCESS';
type GetPokemonDataSuccess = Action<typeof GET_POKEMON_DATA_SUCCESS, PokemonData>;
export const getPokemonDataSuccess = (pokemon: PokemonData) => ({
    type: GET_POKEMON_DATA_SUCCESS,
    payload: pokemon,
});

export type PokemonAction =
    | GetPokemonsSuccess
    | SetNextPage
    | SetPreviousPage
    | GetPokemonDataSuccess;

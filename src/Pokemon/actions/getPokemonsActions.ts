import { Pokemon } from '../models/pokemonModels';
import { Action } from '../../shared/models/appAction';
import { PaginatedResponse } from '../../shared/models/httpModels';

export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
type GetPokemonsRequest = Action<typeof GET_POKEMONS_REQUEST>;
export const getPokemonsRequest = () => ({
    type: GET_POKEMONS_REQUEST,
});

export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
type GetPokemonsSuccess = Action<typeof GET_POKEMONS_SUCCESS, PaginatedResponse<Pokemon>>;
export const getPokemonsSuccess = (pokemons: PaginatedResponse<Pokemon>) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: pokemons,
});

export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';
type GetPokemonsFailure = Action<typeof GET_POKEMONS_FAILURE>;
export const getPokemonsFailure = () => ({
    type: GET_POKEMONS_FAILURE,
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

export type GetPokemonsActions =
    | GetPokemonsRequest
    | GetPokemonsSuccess
    | GetPokemonsFailure
    | SetNextPage
    | SetPreviousPage;

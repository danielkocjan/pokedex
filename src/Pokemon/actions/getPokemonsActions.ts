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

export type GetPokemonsActions = GetPokemonsRequest | GetPokemonsSuccess | GetPokemonsFailure;

import { PokemonData } from '../models/pokemonModels';
import { Action } from '../../shared/models/appAction';

export const GET_POKEMON_DATA_REQUEST = 'GET_POKEMON_DATA_REQUEST';
type GetPokemonDataRequest = Action<typeof GET_POKEMON_DATA_REQUEST>;
export const getPokemonDataRequest = () => ({
    type: GET_POKEMON_DATA_REQUEST,
});

export const GET_POKEMON_DATA_SUCCESS = 'GET_POKEMON_DATA_SUCCESS';
type GetPokemonDataSuccess = Action<typeof GET_POKEMON_DATA_SUCCESS, PokemonData>;
export const getPokemonDataSuccess = (pokemon: PokemonData) => ({
    type: GET_POKEMON_DATA_SUCCESS,
    payload: pokemon,
});

export const GET_POKEMON_DATA_FAILURE = 'GET_POKEMON_DATA_FAILURE';
type GetPokemonDataFailure = Action<typeof GET_POKEMON_DATA_FAILURE>;
export const getPokemonDataFailure = () => ({
    type: GET_POKEMON_DATA_FAILURE,
});

export type GetPokemonDataActions =
    | GetPokemonDataRequest
    | GetPokemonDataSuccess
    | GetPokemonDataFailure;

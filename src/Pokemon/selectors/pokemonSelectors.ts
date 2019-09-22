import { AppState } from '../../shared/reducers/rootReducer';

export const pokemonsPaginationSelector = ({ pokemon }: AppState) => pokemon.pagination;

export const isFetchingSelector = ({ pokemon }: AppState) => pokemon.isFetching;

export const pokemonDataSelector = ({ pokemon }: AppState, name: string) =>
    pokemon.pokemons.find(poke => poke.name === name);

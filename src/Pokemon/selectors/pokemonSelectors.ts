import { AppState } from '../../shared/reducers/rootReducer';
import { paginationLimit } from '../../shared/config/apiConfig';

export const pokemonsResultsSelector = ({ pokemon }: AppState) => pokemon.pagination.results;

export const pokemonsPageSelector = ({ pokemon }: AppState) => pokemon.pagination.page;

export const pokemonsTotalPagesSelector = ({ pokemon }: AppState) =>
    Math.floor(pokemon.pagination.count / paginationLimit);

export const isLastPageSelector = (state: AppState) =>
    state.pokemon.pagination.page === pokemonsTotalPagesSelector(state);

export const isFetchingSelector = ({ pokemon }: AppState) => pokemon.isFetching;

export const pokemonDataSelector = ({ pokemon }: AppState, name: string) =>
    pokemon.pokemonsData.find(poke => poke.name === name);

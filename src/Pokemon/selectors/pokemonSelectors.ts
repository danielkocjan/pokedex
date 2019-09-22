import { AppState } from '../../shared/reducers/rootReducer';

export const pokemonsPaginationSelector = ({ pokemon }: AppState) => pokemon.pagination;

export const isFetchingPokemonsSelector = ({ pokemon }: AppState) => pokemon.isFetching;

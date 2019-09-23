import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions/getPokemonsActions';
import { pokemonService } from '../../shared/services/rootService';
import {
    isFetchingSelector,
    pokemonsResultsSelector,
    pokemonsPageSelector,
} from '../selectors/pokemonSelectors';

export const useGetPokemons = () => {
    const dispatch = useDispatch();

    const page = useSelector(pokemonsPageSelector);

    const getPokemons = useCallback(() => {
        dispatch(actions.getPokemonsRequest());

        return pokemonService
            .getPokemons(page)
            .then(pokemons => dispatch(actions.getPokemonsSuccess(pokemons)))
            .catch(() => dispatch(actions.getPokemonsFailure()));
    }, [dispatch, page]);

    useEffect(() => {
        getPokemons();
    }, [page, getPokemons]);

    const pokemons = useSelector(pokemonsResultsSelector);
    const isFetching = useSelector(isFetchingSelector);

    return { pokemons, isFetching, page };
};

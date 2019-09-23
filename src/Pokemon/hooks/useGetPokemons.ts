import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions/getPokemonsActions';
import { pokemonService } from '../../shared/services/rootService';
import { isFetchingSelector, pokemonsPaginationSelector } from '../selectors/pokemonSelectors';

export const useGetPokemons = () => {
    const dispatch = useDispatch();

    const getPokemons = useCallback(() => {
        dispatch(actions.getPokemonsRequest());

        return pokemonService
            .getPokemons()
            .then(pokemons => dispatch(actions.getPokemonsSuccess(pokemons)))
            .catch(() => dispatch(actions.getPokemonsFailure()));
    }, [dispatch]);

    useEffect(() => {
        getPokemons();
    }, [getPokemons]);

    const pagination = useSelector(pokemonsPaginationSelector);
    const isFetching = useSelector(isFetchingSelector);

    return { pagination, isFetching };
};

import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions/pokemonActions';
import { pokemonService } from '../../shared/services/rootService';
import { pokemonsPageSelector } from '../selectors/pokemonSelectors';

export const useGetPokemons = () => {
    const [fetchingStatus, setFetchingStatus] = useState(true);

    const dispatch = useDispatch();

    const page = useSelector(pokemonsPageSelector);

    const getPokemons = useCallback(
        () =>
            pokemonService
                .getPokemons(page)
                .then(pokemons => {
                    dispatch(actions.getPokemonsSuccess(pokemons));
                    setFetchingStatus(false);
                })
                .catch(() => setFetchingStatus(false)),
        [dispatch, page]
    );

    useEffect(() => {
        setFetchingStatus(true);
        getPokemons();
    }, [page, getPokemons]);

    return { fetchingStatus };
};

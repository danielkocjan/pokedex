import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions/pokemonActions';
import { pokemonService } from '../../shared/services/rootService';
import { pokemonDataSelector } from '../selectors/pokemonSelectors';
import { AppState } from '../../shared/reducers/rootReducer';

export const useGetPokemonData = (pokemonName: string) => {
    const [fetchingStatus, setFetchingStatus] = useState(true);

    const dispatch = useDispatch();

    const getPokemonData = useCallback(
        (name: string) =>
            pokemonService
                .getPokemonData(name)
                .then(pokemons => {
                    dispatch(actions.getPokemonDataSuccess(pokemons));
                    setFetchingStatus(false);
                })
                .catch(() => setFetchingStatus(false)),
        [dispatch]
    );

    const pokemonData = useSelector((state: AppState) => pokemonDataSelector(state, pokemonName));

    useEffect(() => {
        if (pokemonData) {
            return setFetchingStatus(false);
        }

        getPokemonData(pokemonName);
    }, [getPokemonData, pokemonName, pokemonData]);

    return { fetchingStatus, pokemonData };
};

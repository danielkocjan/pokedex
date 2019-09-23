import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions/getPokemonDataActions';
import { pokemonService } from '../../shared/services/rootService';
import { pokemonDataSelector, isFetchingSelector } from '../selectors/pokemonSelectors';
import { AppState } from '../../shared/reducers/rootReducer';

export const useGetPokemonData = (name: string) => {
    const dispatch = useDispatch();

    const getPokemonData = useCallback(
        (name: string) => {
            dispatch(actions.getPokemonDataRequest());

            return pokemonService
                .getPokemonData(name)
                .then(pokemons => dispatch(actions.getPokemonDataSuccess(pokemons)))
                .catch(() => dispatch(actions.getPokemonDataFailure()));
        },
        [dispatch]
    );

    const pokemon = useSelector((state: AppState) => pokemonDataSelector(state, name));
    const isFetching = useSelector(isFetchingSelector);

    useEffect(() => {
        if (!pokemon) {
            getPokemonData(name);
        }
    }, [getPokemonData, name, pokemon]);

    return { pokemon, isFetching };
};

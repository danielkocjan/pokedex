import React, { useEffect, useCallback } from 'react';
// import { useSelector } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { pokemonService } from '../../shared/services/rootService';
import * as actions from '../actions/getPokemonsActions';
import { pokemonsPaginationSelector } from '../selectors/pokemonSelectors';

export const Pokemons: React.FC = () => {
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

    return (
        <div>
            {pagination.results.map(poke => (
                <li key={poke.url}>{poke.name}</li>
            ))}
        </div>
    );
};

import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pokemonService } from '../../shared/services/rootService';
import * as actions from '../actions/getPokemonsActions';
import { pokemonsPaginationSelector, isFetchingSelector } from '../selectors/pokemonSelectors';
import { getPokemonSpriteByUrl, capitalize } from '../../shared/helpers/helpers';
import { Link } from 'react-router-dom';

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
    const isFetching = useSelector(isFetchingSelector);

    return isFetching ? (
        <div>Loading...</div>
    ) : (
        <div>
            {pagination.results.map(({ url, name }) => (
                <Link key={url} to={`/pokemon/${name}`}>
                    <div>
                        <img src={getPokemonSpriteByUrl(url)} alt={name} />
                        {capitalize(name)}
                    </div>
                </Link>
            ))}
        </div>
    );
};

import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { pokemonService } from '../../shared/services/rootService';
import * as actions from '../actions/getPokemonDataActions';
import { pokemonDataSelector, isFetchingSelector } from '../selectors/pokemonSelectors';
import { AppState } from '../../shared/reducers/rootReducer';

type PokemonProps = RouteComponentProps<{ name: string }>;

const PokemonContainer: React.FC<PokemonProps> = props => {
    const { name } = props.match.params;
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

    useEffect(() => {
        getPokemonData(name);
    }, [getPokemonData, name]);

    const pokemon = useSelector((state: AppState) => pokemonDataSelector(state, name));
    const isFetching = useSelector(isFetchingSelector);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    return pokemon ? (
        <div>
            <img src={pokemon.sprites.frontDefault} alt={pokemon.name} />
            {pokemon.name}
        </div>
    ) : (
        <div>No pokemon found</div>
    );
};

export const Pokemon = withRouter(PokemonContainer);

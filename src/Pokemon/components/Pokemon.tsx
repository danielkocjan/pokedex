import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Spinner } from '../../shared/components/Spinner';
import { PokemonTypes } from './PokemonTypes';
import { PokemonStats } from './PokemonStats';
import { useGetPokemonData } from '../hooks/useGetPokemonData';
import { serializeStats, serializeTypes } from '../../shared/helpers/helpers';
import { useSelector } from 'react-redux';
import { pokemonDataSelector, isFetchingSelector } from '../selectors/pokemonSelectors';
import { AppState } from '../../shared/reducers/rootReducer';

type PokemonProps = RouteComponentProps<{ name: string }>;

const PokemonContainer: React.FC<PokemonProps> = props => {
    const { name } = props.match.params;

    useGetPokemonData(name);

    const pokemon = useSelector((state: AppState) => pokemonDataSelector(state, name));
    const isFetching = useSelector(isFetchingSelector);

    if (isFetching) {
        return <Spinner />;
    }

    return pokemon ? (
        <section className="pokemon-card">
            <header className="pokemon-card__header">
                <img
                    src={pokemon.sprites.frontDefault}
                    alt={pokemon.name}
                    className="pokemon-card__img"
                />
                <h1 className="pokemon-card__name">{pokemon.name}</h1>
            </header>
            <PokemonTypes types={serializeTypes(pokemon.types)} />
            <PokemonStats stats={serializeStats(pokemon.stats)} />
        </section>
    ) : (
        <div>No pokemon found</div>
    );
};

export const Pokemon = withRouter(PokemonContainer);

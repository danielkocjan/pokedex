import React from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from '../../shared/components/Spinner';
import { PokemonTypes } from './PokemonTypes';
import { PokemonStats } from './PokemonStats';
import { useGetPokemonData } from '../hooks/useGetPokemonData';
import { serializeStats, serializeTypes } from '../../shared/helpers/helpers';

interface PokemonRouteParams {
    name: string;
}

export const Pokemon: React.FC = () => {
    const { name } = useParams<PokemonRouteParams>();

    const { fetchingStatus, pokemonData } = useGetPokemonData(name);

    if (fetchingStatus) {
        return <Spinner />;
    }

    return pokemonData ? (
        <section className="pokemon-card">
            <header className="pokemon-card__header">
                <img
                    src={pokemonData.sprites.frontDefault}
                    alt={pokemonData.name}
                    className="pokemon-card__img"
                />
                <h1 className="pokemon-card__name">{pokemonData.name}</h1>
            </header>
            <PokemonTypes types={serializeTypes(pokemonData.types)} />
            <PokemonStats stats={serializeStats(pokemonData.stats)} />
        </section>
    ) : (
        <div>No pokemon found</div>
    );
};

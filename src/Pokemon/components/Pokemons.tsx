import React from 'react';
import { Link } from 'react-router-dom';

import { getPokemonSpriteByUrl } from '../../shared/helpers/helpers';
import { Spinner } from '../../shared/components/Spinner';
import { useGetPokemons } from '../hooks/useGetPokemons';

export const Pokemons: React.FC = () => {
    const { pagination, isFetching } = useGetPokemons();

    return isFetching ? (
        <Spinner />
    ) : (
        <section className="pokemons">
            <input type="text" className="pokemons__search" />

            <ul className="pokemons__list">
                {pagination.results.map(({ url, name }) => (
                    <li key={url}>
                        <Link to={`/pokemon/${name}`}>
                            <img src={getPokemonSpriteByUrl(url)} alt={name} />
                            <span className="pokemons__list__name">{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

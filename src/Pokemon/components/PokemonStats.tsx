import React from 'react';

import { Name } from '../../shared/models/commonModels';

interface PokemonStat extends Name {
    value: number;
}

export const PokemonStats: React.FC<{ stats: PokemonStat[] }> = ({ stats }) => (
    <>
        <h2>Stats:</h2>
        <ul className="pokemon-stats">
            {stats.map(({ name, value }) => (
                <li key={name} className="pokemon-stats__stat">
                    <span>{name}:</span>
                    <span>{value}</span>
                </li>
            ))}
        </ul>
    </>
);

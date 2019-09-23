import React from 'react';

import { Name } from '../../shared/models/commonModels';

interface PokemonStat extends Name {
    value: number;
}

export const PokemonStats: React.FC<{ stats: PokemonStat[] }> = ({ stats }) => (
    <>
        <ul className="pokemon-stats">
            {stats.map(({ name, value }) => (
                <li key={name} className="pokemon-stats__stat">
                    <span className="pokemon-stats__stat--key">{name}:</span>
                    <span className="pokemon-stats__stat--value">{value}</span>
                </li>
            ))}
        </ul>
    </>
);

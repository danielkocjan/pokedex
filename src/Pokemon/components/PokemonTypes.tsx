import React from 'react';

export const PokemonTypes: React.FC<{ types: string[] }> = ({ types }) => (
    <ul className="pokemon-types">
        {types.map(type => (
            <li key={type} className="pokemon-types__type" data-type={type}>
                {type}
            </li>
        ))}
    </ul>
);

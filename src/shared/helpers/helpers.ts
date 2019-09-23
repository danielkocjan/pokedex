import { Stat, Type } from '../../Pokemon/models/pokemonModels';

export const getPokemonSpriteByUrl = (url: string) => {
    const matches = url.match(/\/pokemon\/(\d+)/);

    const id = matches ? matches[1] : '';

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const serializeStats = (stats: Stat[]) =>
    stats.map(({ stat, baseStat }) => ({
        name: stat.name,
        value: baseStat,
    }));

export const serializeTypes = (types: Type[]) => types.map(({ type }) => type.name);

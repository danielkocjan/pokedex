export const getPokemonSpriteByUrl = (url: string) => {
    const matches = url.match(/\/pokemon\/(\d+)/);

    const id = matches ? matches[1] : '';

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const capitalize = (string: string) =>
    string
        .toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

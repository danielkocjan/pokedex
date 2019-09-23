import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonSpriteByUrl } from '../../shared/helpers/helpers';
import { Spinner } from '../../shared/components/Spinner';
import { useGetPokemons } from '../hooks/useGetPokemons';
import { setNextPage, setPreviousPage } from '../actions/getPokemonsActions';
import { isLastPageSelector } from '../selectors/pokemonSelectors';

export const Pokemons: React.FC = () => {
    const { pokemons, isFetching, page } = useGetPokemons();

    const dispatch = useDispatch();
    const nextPage = () => dispatch(setNextPage());
    const previousPage = () => dispatch(setPreviousPage());

    const isLastPage = useSelector(isLastPageSelector);

    return isFetching ? (
        <Spinner />
    ) : (
        <section className="pokemons">
            <ul className="pokemons__list">
                {pokemons.map(({ url, name }) => (
                    <li key={url}>
                        <Link to={`/pokemon/${name}`}>
                            <img src={getPokemonSpriteByUrl(url)} alt={name} />
                            <span className="pokemons__list__name">{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="pokemons__pagination">
                <button disabled={page === 1} onClick={previousPage}>
                    Prev
                </button>
                <button disabled={isLastPage} onClick={nextPage}>
                    Next
                </button>
            </div>
        </section>
    );
};

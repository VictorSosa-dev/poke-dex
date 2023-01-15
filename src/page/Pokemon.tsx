import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

import pokeballIcon from '../assets/pokeball.png';
import bulbasaur from '../assets/bulbasaur.gif';
import styles from './pokemon.module.css';
import Footer from '../components/Footer';
import { PokemonDetail } from '../types/types';
import { fetchPokemon } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';




const Pokemon = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
    const navegate = useNavigate();
    const {name} = useParams();

    useEffect(() => {
        const getPokemon = async () => {
            setIsLoading(true);
            const pokemonDetail = await fetchPokemon(name as string);
            setPokemon(pokemonDetail);
            setIsLoading(false);
        };
        getPokemon();
    }, [name]);

    if (isLoading || !pokemon) {
        return <LoadingScreen />;
    }


    return (
    <>
        <button className={styles.pokeballButton} onClick={() => navegate(-1)}>
            <img className={styles.pokeballImg} src={pokeballIcon} alt="Pokeball" /> Go back
        </button>
        <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
                <div className={styles.pokemonTitle} >{name?.toUpperCase()}</div>
                <div>Nr. {pokemon?.id}</div>
                <div>
                    <img className={styles.pokemonInfoImg} src={pokemon?.image} alt="bulbasaur" />
                </div>
                <div>HP: {pokemon?.hp}</div>
                <div>Attack: {pokemon?.attack}</div>
                <div>Defense: {pokemon?.defense}</div>
            </main>
        </div>
        <Footer />
    </>
    );
};

export default Pokemon;
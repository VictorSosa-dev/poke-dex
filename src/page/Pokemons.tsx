import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './pokemons.module.css';
import { fetchPokemons } from '../api/fetchPokemons';
import { waitFor } from '../utils/utils';
import { Pokemon } from '../types/types.d';
const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true);
            await waitFor(1000);
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
            setIsLoading(false);
        };
        fetchAllPokemons();
    }, []);

    if (isLoading || !pokemons) {
        return <LoadingScreen />;
    }

    const filteredPokemon = pokemons?.slice(0, 151).filter((pokemon: any) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    });

    const listPokemons = filteredPokemon?.map((pokemon: any) => (
        <Link 
            key={pokemon.id}
            className={styles.listItem}
            to={`/pokemon/${pokemon.name.toLowerCase()}`}
        >
            <img 
                className={styles.listItemIcon} 
                src={pokemon.image} 
                alt={pokemon.name} 
            />
            <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <small>{pokemon.id}</small>
            </div>
        </Link>
    ));

    return <> 
        <Header query={query} setQuery={setQuery} />
        <main>
            <nav className={styles.nav}>
                {listPokemons}
            </nav>
        </main>
        <Footer />
    </>
    
};

export default Pokemons;
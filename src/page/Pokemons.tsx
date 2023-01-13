import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import bulbasaur from '../assets/bulbasaur.gif';
import styles from './pokemons.module.css';
import { fetchPokemons } from '../api/fetchPokemons';

const Pokemons = () => {
    const [query, setQuery] = React.useState('');
    const [error, setError] = React.useState('');
    const [pokemons, setPokemons] = React.useState([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            const allPokemons = await fetchPokemons();
            if(allPokemons.length > 0) {
                setPokemons(allPokemons);
            }else {
                setError('No pokemons found');
                setPokemons([]);
            }
        };
        fetchAllPokemons();
    }, []);

    const listPokemons = pokemons.slice(0, 151).map((pokemon: any) => (
        <Link className={styles.listItem} to="/">
            <img className={styles.listItemIcon} src={pokemon.image} alt="bulbasaur" />
            <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <small>{pokemon.id}</small>
            </div>
        </Link>
    ));

    return <> 
        <Header query={query} setQuery={setQuery} />
        <main>
            {error}
            <nav>
                {listPokemons}
            </nav>
        </main>
        <Footer />
    </>
    
};

export default Pokemons;
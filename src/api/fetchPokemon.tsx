import {PokemonDetail} from '../types/types.d';
import { formatPokemonName } from '../utils/utils';

const API = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async(name: string): Promise<PokemonDetail> => {
    const response = await fetch(`${API}${formatPokemonName(name)}`);

    if (!response.ok) {
        throw new Error(`Error fetching pokemon: ${name}`);
    }
    const result = await response.json();
    const pokemon: PokemonDetail = {
        id: result.id,
        name: result.name,
        image: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
    };

    return pokemon;
}



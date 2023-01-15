import { formatPokemonName } from "../utils/utils";
import { Pokemon } from "../types/types.d";
const API = "https://unpkg.com/pokemons@1.1.0/pokemons.json";


export const fetchPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch(API);

    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log(data);

    const pokemons = data.results.map((pokemon: any) => ({
        id: pokemon.national_number,
        name: pokemon.name,
        image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`
    }));

    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) => 
            pokemons.findIndex((other: any) => other.id === pokemon.id) === index
    );
    return uniquePokemons;
}
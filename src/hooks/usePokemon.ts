import { useState, ChangeEvent } from 'react';

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  front_default: string;
};
type Pokemon = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
};

type UsePokemon = () => {
  query: string;
  handleSetQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  pokemon: Pokemon | null;
  fetchPokemon: () => Promise<void>;
};

export const usePokemon: UsePokemon = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  // pokemonに対してオブジェクトが返ってくるけど空オブジェクト自体がtrueな値になるから初期値をnullかundefinedにする
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchPokemon = async () => {
    setPokemon(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      const data = (await response.json()) as Pokemon;
      setPokemon(data);
    } catch (error) {
      setError('ポケモンが見つかりません');
    }
  };
  return { query, handleSetQuery, error, pokemon, fetchPokemon };
};

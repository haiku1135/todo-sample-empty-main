import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { usePokemon } from '@/hooks/usePokemon';

const Page: NextPage = () => {
  const { query, handleSetQuery, error, pokemon, fetchPokemon } = usePokemon();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex flex-col items-center justify-center">
        {/* 入力フォーム */}
        <div>
          <input
            className="rounded-sm border px-3 py-2 outline-none"
            value={query}
            type="text"
            placeholder="ポケモンの名前を入力"
            onChange={handleSetQuery}
          />
          {error && <p className="mt-2 text-base text-red-500">{error}</p>}
        </div>
        {/* ポケモンの情報 */}
        {pokemon && (
          <div className="mt-4 text-center text-base">
            <h3>{pokemon.name}</h3>
            <div className="flex justify-center">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <p>type: {pokemon.types.map((pokemonType) => pokemonType.type.name).join(' , ')}</p>
            <p>height: {pokemon.height}</p>
            <p>mass: {pokemon.weight}</p>
          </div>
        )}

        {/* search button */}
        <div className="mt-4 flex justify-center">
          <Button onClick={fetchPokemon} label="検索" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default Page;

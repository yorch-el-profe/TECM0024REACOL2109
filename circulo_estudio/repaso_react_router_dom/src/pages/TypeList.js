import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonList from "../components/PokemonList";

function TypeList() {
  const { type } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(
    function () {
      fetch("https://pokeapi.co/api/v2/type/" + type)
        .then((response) => response.json())
        .then((data) => setPokemon(data.pokemon));
    },
    [type]
  );

  return <PokemonList pokemon={pokemon} />;
}

export default TypeList;

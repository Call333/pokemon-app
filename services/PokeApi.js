import { useState } from "react";
import Pokemon from "./Pokemon"

export default function PokeApi() {

    let poke = new Pokemon();

    const pokemons = []

    let limit = 6;
    let offset = 0;

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    let pokeName = '';

    fetch(url)
        .then((response) => response.json())
        .then((respJson) => respJson.results)
        .then((pokemon) => pokemon.forEach(e => {
            console.log(e);
        })
        )
}
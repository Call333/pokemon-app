import { View } from "react-native";
import { Pokemon } from "./Pokemon"
import CardPoke from "../components/CardPoke/CardPoke";
import { useEffect } from "react";

export function LoadPokemon(pokemon) {
    const id = pokemon.id
    return (
        <CardPoke id={id}></CardPoke>
    );
}

export default function PokeApi() {

    const convertPokeApiDetailToPokemon = (pokeDetail) => {
        pokemon.nome = pokeDetail.name;
        pokemon.id = pokeDetail.id;

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
        const [type] = types

        pokemon.tipos = types;
        pokemon.tipo = type;

        pokemon.photoURL = pokeDetail.sprites.other.home.front_default;
        return pokemon
    }

    let pokemon = new Pokemon()
    let urlUnique = `https://pokeapi.co/api/v2/pokemon/venusaur`

    useEffect(() => {
        fetch(urlUnique, { method: "GET", mode: "cors" })
            .then((response) => response.json())
            .then((respJson) => {
                convertPokeApiDetailToPokemon(respJson)
                LoadPokemon(pokemon)
                return (
                    <LoadPokemon></LoadPokemon>
                )
            })
    })
}

// let limit = 6;
    // let offset = 0;

    // let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
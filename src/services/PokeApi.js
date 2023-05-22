import { View } from "react-native";
import { Pokemon } from "./Pokemon"
import CardPoke from "../components/CardPoke/CardPoke";
import { useEffect, useState } from "react";


export default function PokeApi() {

    const convertPokeApiDetailToPokemon = (pokeDetail) => {
        let pokemon = new Pokemon();
        pokemon.nome = pokeDetail.name;
        pokemon.id = pokeDetail.id;

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
        const [type] = types

        pokemon.tipos = types;
        pokemon.tipo = type;

        pokemon.photoURL = pokeDetail.sprites.other.home.front_default;
        setAgr(pokemon)
    }

    let [agr, setAgr] = useState(new Pokemon()) 

    console.log(agr.id);
    let urlUnique = `https://pokeapi.co/api/v2/pokemon/charmander`
    
    useEffect(() => {
        fetch(urlUnique, { method: "GET", mode: "cors" })
            .then((response) => response.json())
            .then((respJson) => {
                convertPokeApiDetailToPokemon(respJson)
            })
    }, [])

    return (
        <>
            <CardPoke id={agr.id} nome={agr.nome} type1={agr.tipos[0]} type2={agr.tipos[1]} photo={agr.photoURL}></CardPoke>
        </>
    )
}

// let limit = 6;
    // let offset = 0;

    // let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
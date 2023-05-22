import { View } from "react-native";
import { Pokemon } from "./Pokemon"
import CardPoke from "../components/CardPoke/CardPoke";
import { useEffect, useState } from "react";


export default function PokeApi() {

    const getPokemonsDetail = (pokemon) => {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
    }

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
        isso.push(pokemon)
    }

    let [agr, setAgr] = useState(new Pokemon()) // dados
    let [pokemons, setPokemons] = useState([]) // url + name
    let [isso, setIsso] = useState([])


    console.log(agr);

    let limit = 151;
    let offset = 0;

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    // Fetch pra pegar varios
    useEffect(() => {
        fetch(url, { method: "GET", mode: "cors" })
            .then((response) => response.json())
            .then((respJson) => respJson.results)
            .then((poke) => poke.map((pokem, index) => {
                pokemons.push(pokem)
                getPokemonsDetail(pokem)
            }))
    }, [])

    let urlUnique = 'https://pokeapi.co/api/v2/pokemon/1'

    console.log(pokemons)

    // Fetch pra destrinchar os dados de um pokemon
    // useEffect(() => {
    //     fetch(urlUnique, { method: "GET", mode: "cors" })
    //         .then((response) => response.json())
    //         .then((respJson) => {
    //             convertPokeApiDetailToPokemon(respJson)
    //         })
    // }, [])

    console.log(isso);
    return (
        <>
            {
                isso.map((poke) => {
                    // if(poke.tipos.length > 1){
                    //     return(
                    //         <CardPoke key={poke.id} id={poke.id} nome={poke.nome} type1={poke.tipos[0]} photo={poke.photoURL}></CardPoke>
                    //     )
                    // }
                    return(
                        <CardPoke key={poke.id} id={poke.id} nome={poke.nome} type1={poke.tipos[0]} type2={poke.tipos[1]} photo={poke.photoURL}></CardPoke>
                    )
                })
            }
        </>
    )
}


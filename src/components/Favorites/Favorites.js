import { View, StyleSheet } from 'react-native'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../services/firebase/firestore/firestore';
import { auth } from '../../services/firebase/autentication/Auth';

import { useEffect, useState } from 'react';
import { Pokemon } from '../../services/Pokemon';
import CardFavo from './CardFavo/CardFavo';

function Favorites(props) {

  const [user, setUser] = useState(auth.currentUser)

  const querySnapshot = getDocs(collection(db, user.uid));

  let [pokemons, setPokemons] = useState([])
  let [agr, setAgr] = useState(new Pokemon())

  const pegaOsPokemons = (pokeNoFire) => {
    let pokemon = new Pokemon();

    console.log(pokeNoFire);
    pokemon.id = pokeNoFire.number.integerValue;
    pokemon.nome = pokeNoFire.name.stringValue;

    const types = pokeNoFire.types.arrayValue.values.map((typeSlot) => typeSlot.stringValue);
    console.log(types);

    pokemon.tipos = types
    console.log(pokemon.tipos);

    pokemon.photoURL = pokeNoFire.photoURL.stringValue
    console.log(pokemon);

    setAgr(pokemon)
    pokemons.push(pokemon)
  }

  useEffect(
    () => {
      querySnapshot
        .then((datas) => {
          datas.docs.map(
            (dado) => {
              pegaOsPokemons(dado._document.data.value.mapValue.fields)
              console.log(dado._document.data.value.mapValue.fields);
            }
          )
        })
    }, []
  )

  console.log(pokemons);

  return (
    <>
      <View style={styles.container}>
        {pokemons.map((pokemon, i) => {
          if (pokemon.tipos.length > 1) {
            return (
              <CardFavo key={pokemon.id} id={pokemon.id} name={pokemon.nome} photoURL={pokemon.photoURL} tipos={pokemon.tipos}></CardFavo>
            )
          } else {
            return (
              <CardFavo key={pokemon.id} id={pokemon.id} name={pokemon.nome} photoURL={pokemon.photoURL} tipos={pokemon.tipos}></CardFavo>
            )
          }
        })}
      </View>
    </>
  )

}

export default Favorites;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})
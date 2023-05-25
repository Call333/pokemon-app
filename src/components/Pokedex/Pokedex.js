import { StyleSheet, View } from 'react-native';

import React, { useContext, useEffect, useState } from 'react';

import PokeApi from '../../services/PokeApi';
import MyContext from '../contexts/myContext';

function Pokedex({route}) {  
  
  const [a, setA] = useState()
  useEffect(
    () => {setA(route.params.paramKey)}, []
  )
  
  console.log(a);
  return (
    <View style={styles.container}>
      {/* {Array.from({ length: qtdPoke }).map((_, index) => (
        <PokeApi key={index} />
      ))} */}
      <PokeApi limitePoke={route.params.limit} offsetPoke={route.params.offset}></PokeApi>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default Pokedex;
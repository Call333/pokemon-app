import { StyleSheet, View } from 'react-native';

import React, { useContext, useState } from 'react';

import PokeApi from '../../services/PokeApi';
import MyContext from '../contexts/myContext';

function Pokedex() {  

  return (
    <View style={styles.container}>
      {/* {Array.from({ length: qtdPoke }).map((_, index) => (
        <PokeApi key={index} />
      ))} */}
      <PokeApi limitPoke={9} offsetPoke={0}></PokeApi>
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
import { StyleSheet, View } from 'react-native';

import Home from './src/components/Home/Home'
import Pokedex from './src/components/Pokedex/Pokedex'
import ApiProvider from './src/components/contexts/myContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import PokeApi from './src/services/PokeApi';

const Stack = createNativeStackNavigator();

export default function App(props) {
  const [limite, setLimite] = useState(props.limitPoke)
  const [offset, setOffSet] = useState(props.offsetPoke)
  return (
    <>
      <NavigationContainer>
        <ApiProvider>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Generations" component={Home} />
            <Stack.Screen name="Pokedex" component={Pokedex} options={{ headerShown: true }} />
          </Stack.Navigator>
        </ApiProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
});

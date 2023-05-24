import { StyleSheet, View } from 'react-native';

import Home from './src/components/Home/Home'
import LinePoke from './src/components/LinePoke/LinePoke'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Pokedex" component={Home}/>
          <Stack.Screen name="Pokemons" component={LinePoke} />
          {/* <LinePoke></LinePoke> */}
      </Stack.Navigator>
    </NavigationContainer>
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

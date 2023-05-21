
import { StyleSheet, View } from 'react-native';
import LinePoke from './src/components/LinePoke/LinePoke';
import CardPoke from './src/components/CardPoke/CardPoke';
import PokeApi, { LoadPokemon } from './src/services/PokeApi';


export default function App() {
  return (
    <View style={styles.container}>
      <LinePoke></LinePoke>
      <PokeApi></PokeApi>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

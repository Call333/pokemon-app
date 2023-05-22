import { StyleSheet, View } from 'react-native';
import CardPoke from '../CardPoke/CardPoke'
import PokeApi from '../../services/PokeApi';

function LinePoke() {  
  const qtdPoke = 1
  return (
    <View style={styles.container}>
      {/* {Array.from({ length: qtdPoke }).map((_, index) => (
        <PokeApi key={index} />
      ))} */}
      <PokeApi></PokeApi>
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

export default LinePoke;
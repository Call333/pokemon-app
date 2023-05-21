import { StyleSheet, View } from 'react-native';
import CardPoke from '../CardPoke/CardPoke'

function LinePoke() {  
  const qtdPoke = 0
  return (
    <View style={styles.container}>
      {Array.from({ length: qtdPoke }).map((_, index) => (
        <CardPoke key={index} />
      ))}
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
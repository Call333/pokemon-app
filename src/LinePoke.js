import { StyleSheet, Text, View } from 'react-native';
import CardPoke from './components/CardPoke'


export default function LinePoke() {
  return (
    <View style={styles.container}>
        <CardPoke></CardPoke>
        <CardPoke></CardPoke>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },  
});

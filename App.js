
import { StyleSheet, View } from 'react-native';
import LinePoke from './src/LinePoke';

export default function App() {
  return (
    <View style={styles.container}>
      <LinePoke></LinePoke>
      <LinePoke></LinePoke>
      <LinePoke></LinePoke>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
});


import { StyleSheet } from 'react-native';

import AppNavigation from './src/components/AppNavigation/AppNavigation';

export default function App() {

  return (
    <>
      <AppNavigation></AppNavigation>
    </>
  )
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

import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import AppNavigation from './src/components/AppNavigation/AppNavigation';
import Login from './src/components/LoginScreen/Login';
import AppNavigationLogin from './src/components/AppNavigation/AppNavigationLogin';


import { auth } from './src/services/firebase/autentication/Auth';
import { onAuthStateChanged } from 'firebase/auth';
import CentralNavigation from './src/components/AppNavigation/Central';


export default function App() {

  const [user, setUser] = useState()
  useEffect((
    () => setUser(auth.currentUser)
  ), [user])
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('usuário logado');
    } else {
      // User is signed out
      // ...
      console.log('usuário deslogado');
    }
  });

  // if (user) {
  //   return (
  //     <AppNavigation></AppNavigation>
  //   )
  // } else {
  //   return (
  //     <Login></Login>
  //   )
  // }
  return(
    <AppNavigation></AppNavigation>
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


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../LoginScreen/Login';
import Home from '../Home/Home'
import Pokedex from '../Pokedex/Pokedex';

import Register from '../RegisterScreen/Register';
import Favorites from '../Favorites/Favorites';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer independent={false}>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Cadastro de Usuário' component={Register} />
                    <Stack.Screen name="Generations" component={Home} />
                    <Stack.Screen name="Pokedex" component={Pokedex} options={{ headerShown: true }} />
                    <Stack.Screen name='Favoritos' component={Favorites} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

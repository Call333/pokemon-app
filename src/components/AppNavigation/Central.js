import AppNavigation from "./AppNavigation";
import AppNavigationLogin from "./AppNavigationLogin";
import ApiProvider from "../contexts/myContext";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CentralNavigation(){
    return (
        <NavigationContainer independent={true}>
            <ApiProvider>
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={AppNavigationLogin} options={{ headerShown: false } }/>
                    <Stack.Screen name='Pokedex' component={AppNavigation} options={{ headerShown: true }} />
                </Stack.Navigator>
            </ApiProvider>
        </NavigationContainer>
    )
}
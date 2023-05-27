import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../LoginScreen/Login';
import ApiProvider from '../contexts/myContext';
import Register from '../RegisterScreen/Register';

const Stack = createNativeStackNavigator();

export default function AppNavigationLogin() {
    return (
        <NavigationContainer>
            <ApiProvider>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                </Stack.Navigator>
            </ApiProvider>
        </NavigationContainer>
    )
}

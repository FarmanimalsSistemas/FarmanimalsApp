import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import RegistrationScreen from './screens/RegistrarScreen'
import PublicoGScreen from './screens/PublicoGScreen'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="RegistrarScreen" component={RegistrationScreen} />
        <Stack.Screen name="PublicoGScreen" component={PublicoGScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

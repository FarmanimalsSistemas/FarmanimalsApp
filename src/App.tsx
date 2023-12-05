import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import RegistrationScreen from './screens/RegistrarScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

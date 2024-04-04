import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './src/modules/dashboard/Dashboard';
import BuyUSD from './src/modules/buyUSD/BuyUSD';
import P2PTrade from './src/modules/p2pTrade/P2PTrade';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name='BuyUSD' component={BuyUSD} options={{ headerShown: false }} />
        <Stack.Screen name='P2PTrade' component={P2PTrade} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
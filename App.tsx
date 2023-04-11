import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './pages/SplashScreen'
const Stack = createStackNavigator()

const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: true }} />
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true }} /> */}

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

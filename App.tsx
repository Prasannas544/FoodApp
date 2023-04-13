import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './pages/SplashScreen'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

const Stack = createStackNavigator()

const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}


      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

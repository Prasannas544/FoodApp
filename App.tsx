import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './pages/SplashScreen'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { StyleSheet } from 'react-native'
import Search from './pages/Search'
import SearchResult from './pages/SearchResult'
import SavedRecipe from './pages/SavedRecipe'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Recipe_Ingredient from './pages/Recipe_Ingredient'

const Stack = createStackNavigator()

const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator  >

        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Recipe_Ingredient" component={Recipe_Ingredient} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="SavedRecipe" component={SavedRecipe} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResult" component={SearchResult} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins',
  }
})
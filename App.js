import React from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Tabs from './components/Tabs'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'

const store = createStore(reducers, applyMiddleware(thunk))

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }} /> 
          <Stack.Screen name='Deck Detail' component={DeckDetail} options={({ route }) => ({ title: route.params.name })} />
          <Stack.Screen name='Add Card' component={AddCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


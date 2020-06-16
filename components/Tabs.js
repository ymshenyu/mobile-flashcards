import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons/'
import Decks from './Decks'
import AddDeck from './AddDeck'

const Tab = createMaterialBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator barStyle={styles.tab} initialRouteName='Decks' activeColor='#4287f5'>
            <Tab.Screen name='Decks' component={Decks} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name='book-open' size={24} color={color} />
                )
            }} />
            <Tab.Screen name='Add Deck' component={AddDeck} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name='add-box' size={24} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab: {
        backgroundColor: 'white',
    },
})

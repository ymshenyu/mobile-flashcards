import React from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

const DeckCard = (props) => {
    const windowWidth = Dimensions.get('window').width
    const { decks } = props
    return (
        <View style={styles.container}>
            <FlatList data={decks}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={{ fontSize: 25 }}>
                            {item.title}
                        </Text>
                        <Text style={{ fontSize: 20, color: 'grey' }}>
                            {item.totalOfCards} cards
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.title}
                style={{ width: windowWidth }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    card: {
        borderColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        height: Dimensions.get('window').height / 4,
    }
})

const mapStateToProps = ({ decks }) => {
    return {
        decks: Object.values(decks).map(({ title, questions }) => ({
            title,
            totalOfCards: questions.length
        }))
    }
}

export default connect(mapStateToProps)(DeckCard)
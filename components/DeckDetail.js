import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { handleDeleteDeck } from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center'
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    primaryBtn: {
        backgroundColor: '#7e57c2',
        borderRadius: 5,
        padding: 10,
        marginTop: 100,
    },
    secondaryBtn: {
        backgroundColor: '#d1c4e9',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    deleteBtn: {
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    }
})

class DeckDetail extends Component {
    shouldComponentUpdate(next) {
        return next.deck !== undefined
    }
    handleDelete(title) {
        const { dispatch, navigation } = this.props
        dispatch(handleDeleteDeck(title))
        navigation.goBack()
    }
    render() {
        const { deck, navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {deck.title}
                </Text>
                <Text style={styles.subtitle}>
                    {deck['questions'].length} cards
                </Text>
                <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('Add Card', { name: deck.title })}>
                    <Text style={styles.btnText}>
                        Add Card
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryBtn}>
                    <Text style={styles.btnText}>
                        Start Quiz
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn} onPress={() => this.handleDelete(deck.title)}>
                    <Text style={[styles.btnText, { color: '#ef5350' }]}>
                        Delete Deck
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = ({ decks }, { route }) => {
    return {
        deck: decks[route.params.name]
    }
}

export default connect(mapStateToProps)(DeckDetail)
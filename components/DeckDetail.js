import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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

const DeckDetail = (props) => {
    const { deck, dispatch } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {deck.title}
            </Text>
            <Text style={styles.subtitle}>
                {deck['questions'].length} cards
            </Text>
            <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.btnText}>
                    Add Card
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn}>
                <Text style={styles.btnText}>
                    Start Quiz
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn}>
                <Text style={[styles.btnText, { color: '#ef5350' }]}>
                    Delete Deck
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = ({ decks }, { route }) => {
    return {
        deck: decks[route.params.name]
    }
}

export default connect(mapStateToProps)(DeckDetail)
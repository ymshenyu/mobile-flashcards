import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/decks'
import DeckCard from './DeckCard'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class Decks extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleInitialData())
    }
    render() {
        return (
            <View style={styles.container}>
                <DeckCard />
            </View>
        )
    }
}

export default connect()(Decks)

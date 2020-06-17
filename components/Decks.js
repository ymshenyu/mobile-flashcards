import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
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
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <DeckCard navigation={navigation} />
            </View>
        )
    }
}

export default connect()(Decks)

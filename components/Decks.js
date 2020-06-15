import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/decks'

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
        const { decks } = this.props
        return (
            <View style={styles.container}>
                <Text>
                    {JSON.stringify(decks)}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)

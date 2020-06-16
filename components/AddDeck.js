import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleSaveDeck } from '../actions/decks'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
    },
    inputField: {
        alignSelf: 'stretch',
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    btn: {
        marginBottom: 30,
        width: 260,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 5,
        marginTop: 50,
    },
})

class AddDeck extends Component {
    state = {
        input: ''
    }
    render() {
        const { input } = this.state
        const { dispatch } = this.props
        let deck = {
            title: input,
            questions: []
        }
        const handleSubmit = () => {
            if (input === '') {
                alert('Title can not be empty')
                return
            }

            dispatch(handleSaveDeck(deck))
            this.setState(() => ({ input: '' }))
        }
        return (
            <View style={styles.container} >
                <Text style={styles.title}>
                    What is the title of your new deck?
                </Text>
                <TextInput style={styles.inputField} value={input}
                    onChangeText={(text) => this.setState({ input: text })}
                    placeholder='Deck title' />
                <TouchableOpacity style={styles.btn}
                    onPress={handleSubmit}>
                    <Text style={{ fontSize: 20 }}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddDeck)

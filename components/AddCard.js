import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
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
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 50,
    },
})

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    render() {
        const { question, answer } = this.state
        const { dispatch, route, navigation } = this.props
        let newQuestion = {
            question,
            answer
        }
        const handleSubmit = () => {
            if (question === '' || answer === '') {
                alert('Question or answer can not be empty')
                return
            }

            dispatch(handleAddQuestion(route.params.name, newQuestion))
                .then(() => {
                    navigation.goBack()
                })
        }
        return (
            <View style={styles.container} >
                <TextInput style={styles.inputField} value={question}
                    onChangeText={(text) => this.setState({ question: text })}
                    placeholder='Question' />
                <TextInput style={styles.inputField} value={answer}
                    onChangeText={(text) => this.setState({ answer: text })}
                    placeholder='Answer' />
                <TouchableOpacity style={styles.btn}
                    onPress={handleSubmit}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddCard)

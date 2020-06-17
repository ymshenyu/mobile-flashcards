import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    remain: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    questionContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnText: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnContainer: {
        marginTop: 100,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btn: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5,
        marginBottom: 20,
    }
})

class Quiz extends Component {
    state = {
        current: 0,
        score: 0,
        answerShown: false
    }
    render() {
        const { current, score, answerShown } = this.state
        const { questions, navigation } = this.props
        const handleShowAnswer = () => {
            this.setState(() => ({
                answerShown: true
            }))
        }
        const handleAnswer = (isCorrect) => {
            if (isCorrect) {
                this.setState(() => ({
                    score: score + 1,
                    current: current + 1,
                }))
            } else {
                this.setState(() => ({
                    current: current + 1,
                }))
            }
            this.setState(() => ({
                answerShown: false
            }))
        }
        const handleRestart = () => {
            this.setState(() => ({
                score: 0,
                current: 0
            }))
        }
        const toDeck = () => {
            navigation.goBack()
        }
        return (
            <View>
                {questions.length !== 0
                    ? (
                        <View>
                            {current !== questions.length ? (
                                <View>
                                    <View style={styles.container}>
                                        <Text style={styles.remain}>
                                            {current + 1}/{questions.length}
                                        </Text>
                                    </View>
                                    <View style={styles.questionContainer}>
                                        <Text style={styles.title}>
                                            {questions[current].question}
                                        </Text>
                                        {answerShown
                                            ? (
                                                <Text style={styles.subtitle}>
                                                    {questions[current].answer}
                                                </Text>
                                            ) : (
                                                <TouchableOpacity onPress={handleShowAnswer}>
                                                    <Text style={[styles.btnText, { color: '#ff5252' }]}>
                                                        Answer
                                                    </Text>
                                                </TouchableOpacity>
                                            )}
                                    </View>
                                    <View style={styles.btnContainer}>
                                        <TouchableOpacity style={[styles.btn, { backgroundColor: '#00e676' }]} onPress={() => handleAnswer(true)}>
                                            <Text style={styles.btnText}>
                                                Correct
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.btn, { backgroundColor: '#ff5252' }]} onPress={() => handleAnswer(false)}>
                                            <Text style={styles.btnText}>
                                                Incorrect
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ) : (
                                    <View>
                                        <View style={styles.container}>
                                            <Text style={styles.title}>
                                                Score
                                            </Text>
                                            <Text style={styles.subtitle}>
                                                {score}
                                            </Text>
                                        </View>
                                        <View style={styles.btnContainer}>
                                            <TouchableOpacity style={[styles.btn, { backgroundColor: '#ab47bc' }]} onPress={handleRestart}>
                                                <Text style={styles.btnText}>
                                                    Restart Quiz
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.btn, { backgroundColor: '#5c6bc0' }]} onPress={toDeck}>
                                                <Text style={styles.btnText}>
                                                    Back to Deck
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                        </View>
                    ) : (
                        <View style={styles.questionContainer}>
                            <Text style={styles.title}>
                                Sorry, you cannot take a quiz because there are no cards in the deck.
                            </Text>
                        </View>
                    )}
            </View>
        )
    }
}

const mapStateToProps = ({ decks }, { route }) => {
    return {
        questions: decks[route.params.name].questions
    }
}

export default connect(mapStateToProps)(Quiz)
import { getDecks, storeDeck, removeDeck, saveQuestion } from '../utils/api'

export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const SAVE_DECK = 'SAVE_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

const recieveDecks = (decks) => {
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

const saveDeck = (deck) => {
    return {
        type: SAVE_DECK,
        deck
    }
}

const deleteDeck = (title) => {
    return {
        type: REMOVE_DECK,
        title
    }
}

const addQuestion = (title, question) => {
    return {
        type: ADD_QUESTION,
        title,
        question
    }
}

export const handleDeleteDeck = (title) => {
    return (dispatch) => {
        return removeDeck(title)
            .then(() => {
                dispatch(deleteDeck(title))
            })
    }
}

export const handleInitialData = () => {
    return (dispatch) => {
        return getDecks()
            .then((decks) => {
                dispatch(recieveDecks(decks))
            })
    }
}

export const handleSaveDeck = (deck) => {
    return (dispatch) => {
        return storeDeck(deck)
            .then(() => {
                dispatch(saveDeck(deck))
            })
    }
}

export const handleAddQuestion = (title, question) => {
    return (dispatch) => {
        return saveQuestion(title, question)
            .then(() => {
                dispatch(addQuestion(title, question))
            })
    }
}
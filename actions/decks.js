import { getDecks, storeDeck, removeDeck } from '../helpers/api'

export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const SAVE_DECK = 'SAVE_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

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
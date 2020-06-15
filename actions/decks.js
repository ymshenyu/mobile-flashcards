import { getDecks, storeDeck } from '../helpers/api'

export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const SAVE_DECK = 'SAVE_DECK'

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
import { RECIEVE_DECKS, SAVE_DECK, REMOVE_DECK } from '../actions/decks'

export default (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case SAVE_DECK:
            return {
                ...state,
                [action.deck.title]: {
                    ...action.deck
                }
            }
        case REMOVE_DECK:
            const next = { ...state }
            delete next[action.title]
            return next
        default:
            return state
    }
}
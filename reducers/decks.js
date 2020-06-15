import { RECIEVE_DECKS, SAVE_DECK } from '../actions/decks'

export default (state = {}, action) => {
    switch(action.type) {
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
        default:
            return state
    }
}
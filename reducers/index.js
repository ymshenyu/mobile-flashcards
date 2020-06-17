import { combineReducers } from 'redux'

import { RECIEVE_DECKS, SAVE_DECK, REMOVE_DECK, ADD_QUESTION } from '../actions'

const decks = (state = {}, action) => {
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
        case ADD_QUESTION:
            return {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    questions: state[action.title].questions.concat([action.question])
                }
            }
        default:
            return state
    }
}

export default combineReducers({
    decks,
})

import { RECIEVE_DECKS } from '../actions/decks'

export default (state = {}, action) => {
    switch(action.type) {
        case RECIEVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}
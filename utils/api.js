import AsyncStorage from '@react-native-community/async-storage'

const storageKey = 'decks'

export const getDecks = async () => {
    try {
        const decks = await AsyncStorage.getItem(storageKey)
        return JSON.parse(decks)
    } catch (e) {
        console.error('Error: ', e)
    }
}

export const storeDeck = async (deck) => {
    const jsonValue = JSON.stringify({
        [deck.title]: {
            ...deck
        }
    })
    try {
        await AsyncStorage.mergeItem(storageKey, jsonValue)
    } catch (e) {
        console.error('Error: ', e)
    }
}

export const removeDeck = async (title) => {
    try {
        const decks = await AsyncStorage.getItem(storageKey)
        const results = JSON.parse(decks)
        delete results[title]
        await AsyncStorage.setItem(storageKey, JSON.stringify(results))
    } catch (e) {
        console.error('Error: ', e)
    }
}

export const saveQuestion = async (title, question) => {
    try {
        const decks = await AsyncStorage.getItem(storageKey)
        const results = JSON.parse(decks)
        const jsonValue = JSON.stringify({
            ...results,
            [title]: {
                ...results[title],
                questions: results[title].questions.concat([question])
            }
        })
        await AsyncStorage.setItem(storageKey, jsonValue)
    } catch (e) {
        console.error('Error: ', e)
    }
}
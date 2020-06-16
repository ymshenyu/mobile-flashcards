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
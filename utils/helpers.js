import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const createNotification = () => {
    return {
        title: 'Quiz time',
        body: "Don't forget to do a quiz for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export const setLocalNotifications = async () => {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        finalStatus = status
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get notification permission')
    } else {
        Notifications.cancelAllScheduledNotificationsAsync()

        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(20)
        tomorrow.setMinutes(0)

        Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
                time: tomorrow,
                repeat: 'day'
            }
        )
    }
}

export const cancelNotifications = () => {
    return Notifications.cancelAllScheduledNotificationsAsync()
}
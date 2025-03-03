import { StateCreator } from "zustand"
import { FavoritesSliceType } from "./favoriteSlice";

type Notificacion = {
    text: string;
    error: boolean;
    show: boolean
}

export type NotificationSliceType = {
    notification: Notificacion;
    showNotification: (payload: Pick<Notificacion, 'text' | 'error'>) => void;
    hideNotification: () => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set,get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set((state) => ({ ...state, notification: { ...payload, show: true } }))
        setTimeout(() => {
            get().hideNotification()
        }, 5000)
    },
    hideNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        })
    }
})
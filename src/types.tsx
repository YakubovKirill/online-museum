export type User = {
    id: number
    userName: string
    role: string
    image?: string
}

export type ActionType = {
    type: ACTIONS
    payload: User
}

export enum ACTIONS {
    CHANGE_USER = 'CHANGE_USER'
}
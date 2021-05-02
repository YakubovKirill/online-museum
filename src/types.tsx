export type User = {
    id: number
    userName: string
    role: ROLES
    image?: string
}

export type ActionType = {
    type: ACTIONS
    payload: User
}

export enum ACTIONS {
    CHANGE_USER = 'CHANGE_USER'
}

export enum ROLES {
    ADMIN = 'admin',
    GUEST = 'guest'
}
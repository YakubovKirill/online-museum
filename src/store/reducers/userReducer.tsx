import { ACTIONS, ActionType, User } from "../../types";

const initUser: User = {
    id: 1,
    userName: 'guest',
    role: 'guest'
}

export const userReducer = (
    state: User = initUser,
    action: ActionType
) => {
    switch(action.type) {
        case ACTIONS.CHANGE_USER:
            if (!action.payload) return state
            return action.payload
        default: return state
    }
}
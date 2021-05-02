import { ACTIONS, ActionType, ROLES, User } from "../../types";

const initUser: User = {
    id: 0,
    userName: 'guest',
    role: ROLES.GUEST
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
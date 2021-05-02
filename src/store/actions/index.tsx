import { ACTIONS, ActionType, User } from "../../types";

export const changeUserAction = (data: User): ActionType => {
    return {
        type: ACTIONS.CHANGE_USER,
        payload: data
    }
}
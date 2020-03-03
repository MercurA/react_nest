import { IActions, GET_USERS } from "./actionTypes"
import IUserState from "./interfaces/IUserState"

const userState: IUserState = {
    users: [],
}

export function userReducer(state = userState, action: IActions): IUserState | undefined {
    switch(action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
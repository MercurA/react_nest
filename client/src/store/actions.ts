import IUser from "./interfaces/IUser";
import { IActions, GET_USERS } from "./actionTypes";
import { ThunkAction } from "redux-thunk";
import { GlobalState } from ".";
import { Action } from "redux";

const BASE_URL = 'http://localhost:3001';

export const getUserThunk = (): ThunkAction<void, GlobalState, () => any, Action<string>> => async (dispatch: any) => {
    const users = await getUsers();

    dispatch(setUserToState(users));
}

export function setUserToState(users: IUser[]): IActions {
    return {
        type: GET_USERS,
        payload: users
    }
}

export function getUsers(): Promise<IUser[]> {
    return fetch(`${BASE_URL}/user`)
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            return Promise.resolve(res.data);
        }
    })
}
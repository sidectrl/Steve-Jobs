import { Country } from "react-native-country-picker-modal"

export type Account = {
  name?: string
  lastName?: string
  email?: string
  password?: string
  date?: Date
  phoneNumber?: string
  country?: Country
  image?: string
  isLogged: boolean
}

export interface AccountProps {
  account: Account;
}

export interface AccountAction {
  type: ACCOUNT_ACTIONS;
  payload: Account;
}

export enum ACCOUNT_ACTIONS {
  ADD_ACCOUNT = "ADD_ACCOUNT",
  LOGIN_ACCOUNT = "LOGIN_ACCOUNT",
  LOGOUT_ACCOUNT = "LOGOUT_ACCOUNT",
  EDIT_ACCOUNT = "EDIT_ACCOUNT",
  DELETE_ACCOUNT = "DELETE_ACCOUNT",
}

export const signUp = (account: Account) => {
  return {
    type: ACCOUNT_ACTIONS.ADD_ACCOUNT,
    payload: account,
  };
};
export const editAccount = (account: Account) => {
  return {
    type: ACCOUNT_ACTIONS.EDIT_ACCOUNT,
    payload: account,
  };
};
export const login = (account: Account) => {
  return {
    type: ACCOUNT_ACTIONS.LOGIN_ACCOUNT,
    payload: account,
  };
};
export const deleteAccount = (account: Account) => {
  return {
    type: ACCOUNT_ACTIONS.DELETE_ACCOUNT,
    payload: account.email,
  };
};
export const logout = () => {
  return {
    type: ACCOUNT_ACTIONS.LOGOUT_ACCOUNT,
  };
};

import { Country } from "react-native-country-picker-modal"

export type Account = {
  email: string
  password: string
  date?: Date
  phoneNumber: string
  country?: Country
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
}

export const signUp = (account: Account) => {
  return {
    type: ACCOUNT_ACTIONS.ADD_ACCOUNT,
    payload: account,
  };
};

export const login = (account: Account) => {
  return {
    type: ACCOUNT_ACTIONS.LOGIN_ACCOUNT,
    payload: account,
  };
};

export const logout = () => {
  return {
    type: ACCOUNT_ACTIONS.LOGOUT_ACCOUNT,
  };
};

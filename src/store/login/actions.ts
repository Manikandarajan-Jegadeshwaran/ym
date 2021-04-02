
import { LoginTypes } from './types';

export const setLoggedIn = (payload: boolean) => (dispatch: any) =>
  dispatch({ type: LoginTypes.SET_LOGGED_IN, payload });

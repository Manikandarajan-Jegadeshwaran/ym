import { ILoginInfo, LoginTypes } from './types'
import { setState } from "~/utilities/helper";

const initialState: ILoginInfo = {
  loggedIn: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LoginTypes.SET_LOGGED_IN:
      return setState(state, "loggedIn", action);
    default:
      return state;
  }
};

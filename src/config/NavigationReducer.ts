import { routes } from './_routes';
import { ReducerTypes } from './_Actions';

export interface NavigationState {
  isSignedIn: boolean;
  userRoute: routes;
}

export interface NavigationAction {
  type: ReducerTypes;
  payload: {
    isSignedIn?: boolean;
    userRoute?: routes;
  };
}

const INITIAL_STATE = {
  isSignedIn: false,
  userRoute: routes.PROFILE
};

export const NavigationReducer = (
  state: NavigationState = INITIAL_STATE,
  action: NavigationAction
) => {
  switch (action.type) {
    case ReducerTypes.SIGN_IN: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

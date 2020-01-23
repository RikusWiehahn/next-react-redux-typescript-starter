import { routes } from './_routes';
import { ReducerTypes } from './_Actions';

export interface NavigationState {
  userRoute: routes;
}

export interface NavigationAction {
  type: ReducerTypes;
  payload: {
    userRoute?: routes;
  };
}

const INITIAL_STATE = {
  userRoute: routes.PROFILE
};

export const NavigationReducer = (
  state: NavigationState = INITIAL_STATE,
  action: NavigationAction
) => {
  switch (action.type) {
    case ReducerTypes.NAVIGATION_REDUCER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

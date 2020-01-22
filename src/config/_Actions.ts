import { NavigationAction } from './NavigationReducer';

export enum ServiceTypes {
  GET_USER
}

export enum ReducerTypes {
  SIGN_IN,
  SIGN_OUT
}

export type Action = NavigationAction;

const signInUser = (): NavigationAction => {
  return {
    type: ReducerTypes.SIGN_IN,
    payload: {
      isSignedIn: true
    }
  };
};

export const actions = {
  signInUser: signInUser
};

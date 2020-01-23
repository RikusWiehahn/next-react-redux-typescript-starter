import { NavigationAction } from './NavigationReducer';
import { UserAction } from '../_user/UserReducer';
import { OfferingAction } from '../_forms/OfferingReducer';

export enum ServiceTypes {
  GET_USER
}

export enum ReducerTypes {
  SIGN_IN,
  SIGN_OUT,
  OFFERING_REDUCER,
  NAVIGATION_REDUCER,
  USER_REDUCER
}

export type Action = NavigationAction | UserAction | OfferingAction;

const signInUser = ({
  _id,
  userFirstName,
  userLastName
}: {
  _id: string;
  userFirstName: string;
  userLastName: string;
}): UserAction => {
  return {
    type: ReducerTypes.USER_REDUCER,
    payload: {
      _id,
      userFirstName,
      userLastName
    }
  };
};

export const actions = {
  signInUser: signInUser
};

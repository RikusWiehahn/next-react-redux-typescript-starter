import { ReducerTypes } from '../config/_Actions';

export interface UserAction {
  type: ReducerTypes.USER_REDUCER;
  payload: {
    _id?: string;
    userFirstName?: string;
    userLastName?: string;
  };
}

export type UserState = {
  _id: string | null;
  userFirstName: string | null;
  userLastName: string | null;
};

const INITIAL_STATE = <UserState>{
  _id: null,
  userFirstName: null,
  userLastName: null
};

export const UserReducer = (
  state: UserState = INITIAL_STATE,
  action: UserAction
) => {
  switch (action.type) {
    case ReducerTypes.USER_REDUCER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

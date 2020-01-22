import { ReducerTypes } from '../config/_Actions';
import { OfferForm } from '../config/_interfaces';

export type OfferingState = OfferForm;

export interface OfferingAction {
  type: ReducerTypes;
  payload: {};
}

const INITIAL_STATE = {
  _id: '',
  offerName: '',
  offerImage: '',
  conditions: [],
  questions: []
};

export const NavigationReducer = (
  state: OfferingState = INITIAL_STATE,
  action: OfferingAction
) => {
  switch (action.type) {
    // case ReducerTypes.SIGN_IN: {
    //   return {
    //     ...state,
    //     ...action.payload
    //   };
    // }
    default:
      return state;
  }
};

import { ReducerTypes } from '../config/_Actions';
import { OfferForm } from '../config/_interfaces';

export type OfferingState = OfferForm;

export interface OfferingAction {
  type: ReducerTypes.OFFERING_REDUCER;
  payload: {
    _id: '';
    offerName: '';
    offerImage: '';
    conditions: [];
    questions: [];
  };
}

const INITIAL_STATE = <OfferingState>{
  _id: '',
  offerName: '',
  offerImage: '',
  conditions: [],
  questions: []
};

export const OfferingReducer = (
  state: OfferingState = INITIAL_STATE,
  action: OfferingAction
) => {
  switch (action.type) {
    case ReducerTypes.OFFERING_REDUCER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

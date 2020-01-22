import { combineReducers } from 'redux';
import { NavigationReducer, NavigationState } from './NavigationReducer';

export interface StoreState {
  navigation: NavigationState;
}

export const reducers = combineReducers<StoreState>({
  navigation: NavigationReducer
});

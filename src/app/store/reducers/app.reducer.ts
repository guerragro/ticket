import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { citiesReducer } from './cities.reducer';
import { specialReducer } from './special.reducer';
import { searchReducer } from './search.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  cities: citiesReducer,
  special: specialReducer,
  ticket: searchReducer,
};

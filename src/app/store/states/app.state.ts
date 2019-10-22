import { CitiesState } from './cities.state';
import { CitiesModel } from '../../model/model';
import { SpecialState } from './special.state';
import { SearchState } from './search.state';

// TODO переделать структуру
export interface AppState {
  cities: CitiesState;
  special: SpecialState;
  ticket: SearchState;
}

export const InitialState: AppState = {
  cities: null,
  special: null,
  ticket: null
};

export function getInitialState(): AppState {
  return InitialState;
}

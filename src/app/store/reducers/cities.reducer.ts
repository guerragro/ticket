import { InitialCitiesState, CitiesState } from '../states/cities.state';
import * as fromCitiesAction from '../actions/cities.action';
import {CITIES_ACTION} from '../actions/cities.action';

export function citiesReducer(state = InitialCitiesState, action: fromCitiesAction.Action ): CitiesState {
  switch (action.type) {
    case CITIES_ACTION.LOAD_CITIES_OK:
      console.log(action.payload);
      return {
        ...state, cities: action.payload
      };
    case CITIES_ACTION.LOAD_CITIES_ERR:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}

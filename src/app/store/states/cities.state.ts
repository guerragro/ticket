// import { CitiesModel } from '/src/app/model/model';
import { CitiesModel} from '../../model/model';

// TODO in city add a array<Cities>
export interface CitiesState {
  // cities: any[];
  cities: CitiesModel;
}

export const InitialCitiesState: CitiesState = {
  cities: null
};

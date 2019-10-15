import { Action } from '@ngrx/store';

export enum CITIES_ACTION {
  LOAD_CITIES = 'LOAD_CITIES',
  LOAD_CITIES_OK = 'LOAD_CITIES_OK',
  LOAD_CITIES_ERR = 'LOAD_CITIES_ERR',
}

export class LoadCities implements Action {
  readonly type = CITIES_ACTION.LOAD_CITIES;
}

export class LoadCitiesOk implements Action {
  readonly type = CITIES_ACTION.LOAD_CITIES_OK;
  constructor(public payload: any) {}
}

export class LoadCitiesErr implements Action {
  readonly type = CITIES_ACTION.LOAD_CITIES_ERR;
  constructor(public payload) {}
}

export type Action = LoadCities | LoadCitiesOk | LoadCitiesErr;

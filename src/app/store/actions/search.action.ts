import { Action } from '@ngrx/store';

export enum SEARCH_ACTION {
  LOAD_SEARCH = 'LOAD_SEARCH',
  LOAD_SEARCH_OK = 'LOAD_SEARCH_OK',
  LOAD_SEARCH_ERROR = 'LOAD_SEARCH_ERROR'
}

export class LoadSearch implements Action {
  readonly type = SEARCH_ACTION.LOAD_SEARCH;
}

export class LoadSearchOk implements Action {
  readonly type = SEARCH_ACTION.LOAD_SEARCH_OK;
  constructor(public payload: any) {}
}

export class LoadSearchError implements Action {
  readonly type = SEARCH_ACTION.LOAD_SEARCH_ERROR;
  constructor(public payload: any) {}
}

export type Action = LoadSearch | LoadSearchOk | LoadSearchError;

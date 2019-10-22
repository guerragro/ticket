import { Action } from '@ngrx/store';

export enum SPECIAL_ACTION {
  LOAD_SPECIAL = 'LOAD_SPECIAL',
  LOAD_SPECIAL_OK = 'LOAD_SPECIAL_OK',
  LOAD_SPECIAL_ERR = 'LOAD_SPECIAL_ERR'
}

export class LoadSpecial implements Action {
  readonly type = SPECIAL_ACTION.LOAD_SPECIAL;
}
export class LoadSpecialOk implements Action {
  readonly type = SPECIAL_ACTION.LOAD_SPECIAL_OK;
  constructor(public payload) {}
}
export class LoadSpecialErr implements Action {
  readonly type = SPECIAL_ACTION.LOAD_SPECIAL_ERR;
  constructor(public payload) {}
}

export type SpecialAction = LoadSpecial | LoadSpecialOk | LoadSpecialErr;

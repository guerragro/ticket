import { Action } from '@ngrx/store';
import { TicketModel } from '../model';

export namespace TICKET_ACTION {
  export const SEARCH_TICKET_OK = 'SEARCH_TICKET_OK';
  export const SEARCH_TICKET = 'SEARCH_TICKET';
  export const SPECIAL_TICKET = 'SPECIAL_TICKET';
  export const LOAD_CITIES = 'CITIES';
  export const LOAD_CITIES_OK = 'CITIES_OK';
  export const TEST = 'TEST';
}
// export const SEARCH_TICKET = 'SEARCH_TICKET';
// export const SPECIAL_TICKET = 'SPECIAL_TICKET';
// export const CITIES = 'CITIES';

export class SearchTicket implements Action {
  readonly type = TICKET_ACTION.SEARCH_TICKET;
}
export class SearchTicketOk {
  readonly type = TICKET_ACTION.SEARCH_TICKET_OK;
  constructor(
    public payload: []
  ) {}
}

export class SpecialTicket implements Action {
  readonly type = TICKET_ACTION.SPECIAL_TICKET;
  // readonly type = SPECIAL_TICKET;

  constructor(
    public payload: any
  ) {}
}

export class LoadCities implements Action {
  readonly type = TICKET_ACTION.LOAD_CITIES;
}

export class LoadCitiesOk implements Action {
  readonly type = TICKET_ACTION.LOAD_CITIES_OK;
  // readonly type = CITIES;

  constructor(
    public payload: []
  ) {}
}

export class Test implements Action {
  readonly type = TICKET_ACTION.TEST;

  constructor() {}
}

export type Action = SearchTicketOk | SearchTicket | SpecialTicket | LoadCities | LoadCitiesOk | Test;

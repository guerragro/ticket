import { Action } from '@ngrx/store';
import { TicketModel } from '../model';

export namespace TICKET_ACTION {
  export const SEARCH_REQTICKET = 'SEARCH_REQTICKET';
  export const SEARCH_RESTICKET = 'SEARCH_RESTICKET';
  export const SPECIAL_TICKET = 'SPECIAL_TICKET';
  export const CITIES = 'CITIES';
  export const TEST = 'TEST';
}
// export const SEARCH_TICKET = 'SEARCH_TICKET';
// export const SPECIAL_TICKET = 'SPECIAL_TICKET';
// export const CITIES = 'CITIES';

export class TicketReQ implements Action {
  readonly type = TICKET_ACTION.SEARCH_REQTICKET;
  // readonly type = SEARCH_REQTICKET;

  constructor(
    public payload: any
  ) {}
}
export class TicketReS implements Action {
  readonly type = TICKET_ACTION.SEARCH_RESTICKET;

  constructor(
    public payload: any
  ) {}
}

export class SpecialTicket implements Action {
  readonly type = TICKET_ACTION.SPECIAL_TICKET;
  // readonly type = SPECIAL_TICKET;

  constructor(
    public payload: any
  ) {}
}

export class Cities implements Action {
  readonly type = TICKET_ACTION.CITIES;
  // readonly type = CITIES;

  constructor(
    public payload: []
  ) {}
}

export class Test implements Action {
  readonly type = TICKET_ACTION.TEST;

  constructor() {}
}

export type Action = TicketReQ | TicketReS | SpecialTicket | Cities | Test;

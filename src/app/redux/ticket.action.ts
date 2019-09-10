import { Action } from '@ngrx/store';
import { TicketModel } from '../model';
import {TicketService} from '../service/ticket.service';

export namespace TICKET_ACTION {
  export const SEARCH_TICKET = 'SEARCH_TICKET';
  export const SPECIAL_TICKET = 'SPECIAL_TICKET';
  export const CITIES = 'CITIES';
  export const TEST = 'TEST';
}
// export const SEARCH_TICKET = 'SEARCH_TICKET';
// export const SPECIAL_TICKET = 'SPECIAL_TICKET';
// export const CITIES = 'CITIES';

export class SearchTicket implements Action {
  readonly type = TICKET_ACTION.SEARCH_TICKET;
  // readonly type = SEARCH_TICKET;

  constructor(
    public payload: any
  ) {}
}

export class SpecialTicket implements Action {
  readonly type = TICKET_ACTION.SPECIAL_TICKET;
  // readonly type = SPECIAL_TICKET;

  constructor(
    public payload: TicketModel,
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

  public service: TicketService;

  constructor() {}
}

export type Action = SearchTicket | SpecialTicket | Cities | Test;

import { Action } from '@ngrx/store';
import { TicketModel } from '../model';
import { TicketService } from '../service/ticket.service';

export namespace TICKET_ACTION {
  export const SEARCH_TICKET = 'SEARCH_TICKET';
  export const SPECIAL_TICKET = 'SPECIAL_TICKET';
  export const CITIES = 'CITIES';
}

export class SearchTicket implements Action {
  readonly type = TICKET_ACTION.SEARCH_TICKET;

  // public service: TicketService;
  constructor(
    public payload: any
    // payload некоторая новая информация
  ) {}
  // hello() {
  //   this.service.getPriceList().subscribe(
  //     res => console.log(res),
  //     err => console.log(err)
  //   );
  // }
}

export class SpecialTicket implements Action {
  readonly type = TICKET_ACTION.SPECIAL_TICKET;

  constructor(
    public payload: TicketModel,
  ) {}
}

export class Cities implements Action {
  readonly type = TICKET_ACTION.CITIES;

  public service: TicketService;

  constructor(
    public payload,
  ) {
    // this.service.getDataCities().subscribe(
    //   (res: []) => this.payload = res,
    //   err => console.log(err)
    // );
}
}

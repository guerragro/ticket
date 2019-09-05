// const action = {
//   type: 'UPDATE',
//
//   payload: {}
// }
import { Action } from '@ngrx/store';
import { TicketModel } from '../model';
import {TicketService} from '../service/ticket.service';

export namespace TICKET_ACTION {
  export const UPDATE_TICKET = 'UPDATE_TICKET';
}

export class UpdateTicket implements Action {
  readonly type = TICKET_ACTION.UPDATE_TICKET;

  constructor(
    // payload некоторая новая информация
    public payload: TicketModel,
  ) {}

}

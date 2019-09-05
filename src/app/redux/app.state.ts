import {TicketModel} from '../model';

export interface AppState {
  updateTicket: {
    ticket: TicketModel[]
  };
}

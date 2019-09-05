import {TICKET_ACTION, UpdateTicket} from './ticket.action';
import {TicketModel} from '../model';

const initialState = {
  cities: [
    {
      name: 'Khabarovsk'
    },
    {
      name: 'Komsomolisk'
    },
  ],
  ticket: [
    new TicketModel('Владивосток', 'Cеул', '01.09.19', '10.09.19', '13990'),
    new TicketModel('Сеул', 'Япония', '15.09.19', '20.09.19', '12556')
  ]
};

export function ticketReducer(state = initialState, action: UpdateTicket) {

  switch (action.type) {
    case TICKET_ACTION.UPDATE_TICKET:
      return {
        ...state, ticket: [...state.ticket, action.payload]
      };
      default:
      return state;
  }

}

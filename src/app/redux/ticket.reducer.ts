import {TICKET_ACTION, UpdateTicket} from './ticket.action';
import {TicketModel} from '../model';


const initialState = {
  // изначальное состояние
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

// редьюсер это просто функция, которая берет action and state и выдает новое состоянии
export function ticketReducer(state = initialState, action: UpdateTicket) {

  // в зависимости от дейсвия выбирает, что сделать
  switch (action.type) {
    case TICKET_ACTION.UPDATE_TICKET:
      return {
        ...state, ticket: [...state.ticket, action.payload]
      };
      default:
      return state;
  }

}

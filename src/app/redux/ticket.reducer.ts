import {TICKET_ACTION} from './ticket.action';
import * as Ticket from './ticket.action';

export interface State {
  cities: any[];
  ticket: any[];
  special: any[];
  view: boolean;
}

const InitialState: State = {
  // изначальное состояние
  cities: [],
  ticket: [],
  special: [],
  view: false
};

// редьюсер это просто функция, которая берет action and state и выдает новое состоянии
export function ticketReducer(state = InitialState, action: Ticket.Action) {
//   export function ticketReducer(state = initialState, action: Cities) {

  // в зависимости от действия выбирает, что сделать
  switch (action.type) {
    case TICKET_ACTION.SPECIAL_TICKET:
    // case Ticket.SPECIAL_TICKET:
      return {
        ...state, special: [...state.special, action.payload]
      };
    case TICKET_ACTION.SEARCH_TICKET:
      return {
        ...state, ticket: [...state.ticket, action.payload]
      };
    case TICKET_ACTION.CITIES:
      return {
        ...state, cities: [action.payload]
      };
    default:
      return state;
  }
}

export const getCities = (state: State) => state.cities;

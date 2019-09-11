import {TICKET_ACTION} from './ticket.action';
import * as fromAction from './ticket.action';
import { CitiesModel } from '../model';

// модель изначального изначальное состояние
export interface State {
  cities?: CitiesModel[];
  ticket?: any[];
  special?: any[];
  view: boolean;
}

const InitialState: State = {
  // изначальное состояние
  view: false
};

// редьюсер это просто функция, которая берет action and state и выдает новое состоянии
export function ticketReducer(state = InitialState, action: fromAction.Action) {
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
        ...state, cities: action.payload
      };
    default:
      return state;
  }
}

export const getStateCities = (state: State) => state.cities;
export const getStateTicket = (state: State) => state.ticket;
export const getStateSpecial = (state: State) => state.special;

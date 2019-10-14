import {TICKET_ACTION} from './ticket.action';
import * as fromAction from './ticket.action';
import { CitiesModel } from '../model/model';
import {Action} from '@ngrx/store';

// модель изначального изначальное состояние
export interface State {
  cities?: CitiesModel[];
  ticket?: any;
  special?: any[];
  view: boolean;
}

const InitialState: State = {
  // изначальное состояние
  view: false,
  ticket: []
};

// редьюсер это просто функция, которая берет action and state и выдает новое состоянии
export function ticketReducer(state = InitialState, action: fromAction.Action) {
  switch (action.type) {
    case TICKET_ACTION.SPECIAL_TICKET:
      return {
        ...state, special: [...state.special, action.payload]
      };
    case TICKET_ACTION.SEARCH_TICKET_OK:
      return {
        ...state, ticket: [...state.ticket, action.payload]
      };
    case TICKET_ACTION.LOAD_CITIES_OK:
      return {
        ...state, cities: action.payload
      };
    default:
      return state;
  }
}

// Города
// export function CitiesReducer(state = InitialState, action: fromAction.Action) {
//   switch (action.type) {
//     case TICKET_ACTION.LOAD_CITIES_OK:
//       return {
//         console.log('города успешно загружены')
//       };
//     case TICKET_ACTION.LOAD_CITIES_ERR:
//       return {
//         console.log('ERROR')
//       }
//   }
// }

// Поиск билетов
// export function TicketReducer(state = InitialState, action: fromAction.Action) {
//   switch (action.type) {
//     case TICKET_ACTION.SEARCH_TICKET_OK:
//       return {
//         // ...state, ticket: [state.ticket, action.payload]
//       };
//     case TICKET_ACTION.SEARCH_TICKET_ERR:
//       return {
//         console.log('ERROR')
//       }
//   }
// }
// Специальные предложения

export const getStateCities = (state: State) => state.cities;
export const getStateTicket = (state: State) => state.ticket;
export const getStateSpecial = (state: State) => state.special;



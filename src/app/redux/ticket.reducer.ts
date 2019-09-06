import {Cities, SpecialTicket, TICKET_ACTION, SearchTicket} from './ticket.action';
import {TicketModel} from '../model';


const initialState = {
  // изначальное состояние
  cities: [],
  ticket: [],
  special: []
};

// редьюсер это просто функция, которая берет action and state и выдает новое состоянии
// export function ticketReducer(state = initialState, action: [SearchTicket, SpecialTicket, Cities]) {
  export function ticketReducer(state = initialState, action: Cities) {

  // в зависимости от действия выбирает, что сделать
  // action.forEach(a => {
  //   switch (a.type) {
  //     case TICKET_ACTION.SEARCH_TICKET:
  //       return {
  //         ...state, ticket: [a.payload]
  //       };
  //     case TICKET_ACTION.SPECIAL_TICKET:
  //       return {
  //         ...state, special: [...state.special, a.payload]
  //       };
  //     case TICKET_ACTION.CITIES:
  //       return {
  //         ...state, cities: [...state.cities, a.payload]
  //       };
  //     default:
  //       return state;
  //   }
  // });
  switch (action.type) {
    // case TICKET_ACTION.SEARCH_TICKET:
    //   return {
    //     ...state, ticket: [...state.ticket, action.payload]
    //   };
        case TICKET_ACTION.CITIES:
          return {
            ...state, cities: [action.payload]
          };
    default:
      return state;
  }

}

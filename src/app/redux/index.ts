import * as Ticket from './ticket.reducer';
import {ActionReducer, ActionReducerMap, createSelector, MetaReducer, createFeatureSelector} from '@ngrx/store';

export interface State {
  tickets: Ticket.State;
}

export const reducer: ActionReducerMap<State> = {
  tickets: Ticket.ticketReducer
};

// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function (state: State, action: any): State {
//     console.log('state', state);
//     console.log('action', action);
//     return reducer(state, action);
//   };
// }
//
// export const metaReducers: MetaReducer<State>[] = [logger];

export const getTicketState = createFeatureSelector<Ticket.State>('ticket');

export const getCities = createSelector(
  getTicketState,
  Ticket.getCities
);

import * as fromTicket from './ticket.reducer';
import {ActionReducer, ActionReducerMap, createSelector, MetaReducer, createFeatureSelector} from '@ngrx/store';

export interface State {
  tickets: fromTicket.State;
}

export const reducer: ActionReducerMap<State> = {
  tickets: fromTicket.ticketReducer
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

export const getTicketState = createFeatureSelector<fromTicket.State>('tickets');

export const getStateCities = createSelector(
  getTicketState,
  fromTicket.getStateCities
);

export const getStateTicket = createSelector(
  getTicketState,
  fromTicket.getStateTicket
);


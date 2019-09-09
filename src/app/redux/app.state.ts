import {TicketModel} from '../model';

export interface AppState {
  searchTicket: {
    // ticket: TicketModel[]
  };
  specialTicket: {
    // ticket: TicketModel[]
  };
  cities: {
  //
  };
}


// import {
//   ActionReducerMap,
//   createSelector,
//   createFeatureSelector,
//   ActionReducer,
//   MetaReducer,
// } from '@ngrx/store';
//
// import * as Ticket from './ticket.reducer';
//
// export interface State {
//   tickets: Ticket.State;
// }
//
// export const reducers: ActionReducerMap<State> = {
//   films: fromFilms.reducer
// };
//
//
// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function (state: State, action: any): State {
//     console.log('state', state);
//     console.log('action', action);
//     return reducer(state, action);
//   };
// }
//
// export const metaReducers: MetaReducer<State>[] = [logger];
//
//
// export const getTicketState = createFeatureSelector<fromFilms.State>('films');
//
// export const getCities = createSelector(
//   getTicketState,
//   fromFilms.getIds,
// );
//
// export const getTicket = createSelector(
//   getFilmState,
//   fromFilms.getFilms,
// );
//
// export const getSpecial = createSelector(
//   getFilmState,
//   fromFilms.getSelected,
// );
//
// export const getSelectedFilm = createSelector(
//   getSelected,
//   getFilms,
//   (selectedId, films) => {
//     return {
//       ...films[selectedId]
//     };
//   }
// );
//
// export const getAllFilms = createSelector(
//   getIds,
//   getFilms,
//   (ids, films) => {
//     return ids.map(id => films[id]);
//   }
// );

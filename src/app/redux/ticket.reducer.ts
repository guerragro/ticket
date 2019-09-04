import {Action} from '@ngrx/store';

const initialState = {
  // здесь будет массив городов
  cities: [
    {
      name: 'Khabarovsk'
    },
    {
      name: 'Komsomolisk'
    },
  ],
  ticket: [] = []
};

export function ticketReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

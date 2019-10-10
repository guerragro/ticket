import {StateCities} from '../states/cites.state';
import {Action} from '@ngrx/store';

export function CitiesReducer(state = StateCities, action: Action ) {
  switch (action.type) {
    case 'hello':
      return state;
  }
}

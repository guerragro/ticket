import {InitialSpecialState} from '../states/special.state';
import * as fromAction from '../actions/special.action';
import {SPECIAL_ACTION} from '../actions/special.action';

export function specialReducer(state = InitialSpecialState, action: fromAction.SpecialAction) {
  switch (action.type) {
    case SPECIAL_ACTION.LOAD_SPECIAL_OK:
      return state;
    case SPECIAL_ACTION.LOAD_SPECIAL_ERR:
      return state;
    default:
      return state;
  }
}

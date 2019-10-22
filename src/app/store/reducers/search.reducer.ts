import * as fromSearchAction from '../actions/search.action';
import { SEARCH_ACTION } from '../actions/search.action';
import { InitialSearchState } from '../states/search.state';

export function searchReducer(state = InitialSearchState, action: fromSearchAction.Action) {
  switch (action.type) {
    case SEARCH_ACTION.LOAD_SEARCH_OK:
      console.log(action.payload);
      return {
        ...state, ticket: action.payload
      };
      case SEARCH_ACTION.LOAD_SEARCH_ERROR:
        return state;
  }
}

import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { citiesReducer } from './cities.reducer';
import { specialReducer } from './special.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  cities: citiesReducer,
  special: specialReducer,
};
// предыдущая версия
// import {TICKET_ACTION} from './search.action';
// import * as fromAction from './search.action';
// import { CitiesModel } from '../model/model';
// import {Action} from '@ngrx/store';
//
// // модель изначального изначальное состояние
// export interface State {
//   cities?: CitiesModel[];
//   search?: any;
//   special?: any[];
//   view: boolean;
// }
//
// const InitialState: State = {
//   // изначальное состояние
//   view: false,
//   search: []
// };
//
// // редьюсер это просто функция, которая берет action and state и выдает новое состоянии
// export function ticketReducer(state = InitialState, action: fromAction.Action) {
//   switch (action.type) {
//     case TICKET_ACTION.SPECIAL_TICKET:
//       return {
//         ...state, special: [...state.special, action.payload]
//       };
//     case TICKET_ACTION.SEARCH_TICKET_OK:
//       return {
//         ...state, search: [...state.search, action.payload]
//       };
//     case TICKET_ACTION.LOAD_CITIES_OK:
//       return {
//         ...state, cities: action.payload
//       };
//     default:
//       return state;
//   }
// }
//
// // Города
// // export function CitiesReducer(state = InitialState, action: fromAction.Action) {
// //   switch (action.type) {
// //     case TICKET_ACTION.LOAD_CITIES_OK:
// //       return {
// //         console.log('города успешно загружены')
// //       };
// //     case TICKET_ACTION.LOAD_CITIES_ERR:
// //       return {
// //         console.log('ERROR')
// //       }
// //   }
// // }
//
// // Поиск билетов
// // export function TicketReducer(state = InitialState, action: fromAction.Action) {
// //   switch (action.type) {
// //     case TICKET_ACTION.SEARCH_TICKET_OK:
// //       return {
// //         // ...state, search: [state.search, action.payload]
// //       };
// //     case TICKET_ACTION.SEARCH_TICKET_ERR:
// //       return {
// //         console.log('ERROR')
// //       }
// //   }
// // }
// // Специальные предложения
//
// export const getStateCities = (state: State) => state.cities;
// export const getStateTicket = (state: State) => state.search;
// export const getStateSpecial = (state: State) => state.special;

// все редьюсеры
// import { ActionReducerMap } from '@ngrx/store';
// import { IAppState } from '../state/app.state';
// import { cartReducers } from './cart.reducers';
// import { menuReducers } from './menu.reducers';
// import { orderReducers } from './orders.reducers';
// import { orderedProductReducers } from './ordered-product.reducers';
// import { productReducers } from './product.reducers';
// import { subtypeReducers } from './subtype.reducers';
//
// export const appReducers: ActionReducerMap<IAppState, any> = {
//   cart: cartReducers,
//   menus: menuReducers,
//   orders: orderReducers,
//   orderedProducts: orderedProductReducers,
//   products: productReducers,
//   subtypes: subtypeReducers
// };

// отдельный редьюсер
// import { ICartState, initialCartState } from '../state/cart.state';
// import { ECartActions, CartActions } from '../actions/cart.actions';
//
// export const cartReducers = (
//   state = initialCartState,
//   action: CartActions
// ): ICartState => {
//   switch (action.type) {
//     case ECartActions.AddInCart:
//     case ECartActions.ClearCart:
//     case ECartActions.DeleteFromCart:
//     case ECartActions.GetCart:
//       return { ...state, inProgress: true };
//     case ECartActions.AddInCartFailed:
//     case ECartActions.ClearCartFailed:
//     case ECartActions.DeleteFromCartFailed:
//     case ECartActions.GetCartFailed:
//       return {...state, inProgress: false};
//     case ECartActions.AddInCartSuccess: {
//       return {
//         ...state,
//         cart: { ...state.cart, ...action.payload },
//         inProgress: false
//       };
//     }
//     case ECartActions.GetCartSuccess: {
//       return {
//         ...state,
//         inProgress: false,
//         cart: action.payload
//       };
//     }
//     case ECartActions.ClearCartSuccess: {
//       return {
//         ...state,
//         inProgress: false,
//         cart: initialCartState.cart
//       };
//     }
//     case ECartActions.DeleteFromCartSuccess: {
//       return {
//         ...state,
//         inProgress: false,
//         cart: { ...state.cart, ...action.payload }
//       };
//     }
//     default:
//       return state;
//   }
// };

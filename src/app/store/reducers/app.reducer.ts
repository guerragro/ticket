import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { citiesReducer } from './cities.reducer';
// import { specialReducer } from './special.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  cities: citiesReducer,
  // special: specialReducer,
};

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

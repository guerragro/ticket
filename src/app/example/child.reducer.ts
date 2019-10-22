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

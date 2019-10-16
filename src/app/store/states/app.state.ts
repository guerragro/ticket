import { CitiesState } from './cities.state';
import { CitiesModel } from '../../model/model';
import { SpecialState } from './special.state';

// модель
export interface AppState {
  // cities: CitiesState;
  cities: CitiesState;
  special: SpecialState;
  // search?: string[];
}

export const InitialState: AppState = {
  cities: null,
  special: null,
};

export function getInitialState(): AppState {
  return InitialState;
}

// Общий state
// import {RouterReducerState} from '@ngrx/router-store';
// import {IMenuState} from './menu.state';
// import {ISubtypeState} from './subtype.state';
// import {IProductState} from './product.state';
// import {IOrderState} from './order.state';
// import {IOrderedProductState} from './ordered-product.state';
// import {ICartState} from './cart.state';
//
// export interface  IAppState {
//   router?: RouterReducerState;
//   menus: IMenuState;
//   subtypes: ISubtypeState;
//   products: IProductState;
//   orders: IOrderState;
//   orderedProducts: IOrderedProductState;
//   cart: ICartState;
// }
//
// export const initialAppState: IAppState = {
//   menus: null,
//   subtypes: null,
//   products: null,
//   orders: null,
//   orderedProducts: null,
//   cart: null
// };
//
// export function getInitialState(): IAppState {
//   return initialAppState;
// }

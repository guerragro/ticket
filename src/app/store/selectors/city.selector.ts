import { AppState } from '../states/app.state';
import { CitiesState } from '../states/cities.state';
import { createSelector } from '@ngrx/store';

const selectCities = (state: AppState) => state.cities;

export const selectCitiesList = createSelector(
  selectCities,
  (state: CitiesState) => state.cities
);

// import { IAppState } from '../state/app.state';
// import { createSelector } from '@ngrx/store';
// import { IMenuState } from '../state/menu.state';
// // получаем все состояние
// const selectMenus = (state: IAppState) => state.menus;
// // получаем отдельное состояние
// export const selectMenuList = createSelector(
//   selectMenus,
//   (state: IMenuState) => state.menus
// );
//
// export const selectActiveMenuList = createSelector(
//   selectMenus,
//   (state: IMenuState) => state.menus.filter(menu => menu.status_active)
// );
//
// export const selectSelectedMenu = createSelector(
//   selectMenus,
//   (state: IMenuState) => state.selectedMenu
// );
//
// export const selectInProgress = createSelector(
//   selectMenus,
//   (state: IMenuState) => state.inProgress
// );

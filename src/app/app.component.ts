import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

// import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
// import {select, Store} from '@ngrx/store';
// import {IAppState} from './store/state/app.state';
// import {selectActiveMenuList, selectInProgress, selectMenuList} from './store/selectors/menu.selector';
// import {GetMenu, GetMenus, SetMenuStatusActive} from './store/actions/menu.actions';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class AppComponent implements OnInit {
//   menus$ = this._store.pipe(select(selectMenuList));
//   inProgress$ = this._store.pipe(select(selectInProgress));
//
//   constructor(private _store: Store<IAppState>) {}
//
//   ngOnInit(): void {
//     this._store.dispatch(new GetMenus());
//   }
//
//   activateMenu(menuId, status) {
//     this._store.dispatch(new SetMenuStatusActive({id: menuId, status}));
//   }
// }

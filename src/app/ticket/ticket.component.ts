import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { fromMobx } from 'ngx-mobx';
import { Observable } from 'rxjs';
// import { TicketStore } from '../mobx/TicketStore';

import {select, Store} from '@ngrx/store';
import * as fromAction from '../redux/ticket.action';
import * as fromReducer from '../redux/ticket.reducer';
import * as appState from '../redux/app.state';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(
    public store: Store<appState.State>
  ) {}

  ngOnInit() {
    // как только вызывается этот action, срабатывает effects
    this.store.dispatch(new fromAction.LoadCities());
    // this.store.select(appState.getStateCities).subscribe(
    //   res => console.log(res)
    // );
    this.store.subscribe(
      res => console.log(res)
    );
    // this._ticketService.getDataSpecial().subscribe(
    //   res => this.store.dispatch(new fromAction.SpecialTicket(res)),
    //   err => console.log(err)
    // );
    // this.store.select(appState.getStateTicket).subscribe(
    //   res => console.log(res)
    // );
    // this._ticketService.gitDataMonth().subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // );
  }
}

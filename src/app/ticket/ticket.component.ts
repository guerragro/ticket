import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { TicketModel, TicketInterface, CitiesModel } from '../model';
import { fromMobx } from 'ngx-mobx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Store } from '@ngrx/store';
// import { TicketStore } from '../mobx/TicketStore';


import * as fromAction from '../redux/ticket.action';
import * as appState from '../redux/app.state';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets;

  // public _ticketState: Observable<ticket>;

  constructor(
    public _ticketService: TicketService,
    public store: Store<appState.State>
  ) {}

  ngOnInit() {
    this._ticketService.getDataCities().subscribe(
      (res: []) => this.store.dispatch(new fromAction.Cities(res)),
      err => console.log(err)
    );
    // this.store.select('Ticket').subscribe(
    //   res => {
    //     // this.cities = res['cities'];
    //     // console.log(this.cities);
    //     console.log(res);
    //   }
    // );
    // this.store.select(appState.getStateCities).subscribe(
    //   res => console.log(res)
    // );
    this.tickets = this.store.select(appState.getStateTicket);
    console.log(this.tickets);
  }
}

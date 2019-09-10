import { Component, OnInit } from '@angular/core';
import { CitiesModel, TicketModel } from '../model';
import {TicketService} from '../service/ticket.service';

import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromAction from '../redux/ticket.action';
import * as appState from '../redux/app.state';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {

  origin: string;
  destination: string;
  departureDate: any;
  arrivalDate: any;
  id: number = 0;
  // private ticketModel: TicketModel;
  // cities$: Observable<State[]>;
  cities$: Observable<CitiesModel[]>;
  ticket

  constructor(
    // public store: Store<AppState>,
    public _ticketService: TicketService,
    public store: Store<appState.State>
  ) {
    // this.cities$ = this.store.select(TicketState.getStateCities);
    // console.log(this.cities$);
    // this.ticket = this.store.select(appState.getStateTicket);
    // console.log(this.ticket);
  }

  ngOnInit() {
  }

  search(event) {
    if (this.origin === '' && this.destination === '' && this.departureDate === '' && this.arrivalDate === '') {
      return;
    } else {
      this.id++;
      this._ticketService.getPriceList(new TicketModel(this.origin, this.destination, this.departureDate, this.arrivalDate)).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
      // const ticketModel = new TicketModel(this.origin, this.destination, this.departureDate, this.arrivalDate, this.id);
      //       // console.log(ticketModel);
      this.store.dispatch(new fromAction.SearchTicket({name: 123}));
      //       // this.store.dispatch(ticketModel);
    }
    // this.model.push(this.ticketModel);
    // console.log(this.model);
  }
}

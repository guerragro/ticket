import { Component, OnInit } from '@angular/core';
import { TicketModel } from '../model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';

import * as Action from '../redux/ticket.action';
import {TicketService} from '../service/ticket.service';
import {Observable} from 'rxjs';
import {State} from '../redux/ticket.reducer';

import * as TicketState from '../redux/index';

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
  cities$: Observable<State[]>;

  constructor(
    // public store: Store<AppState>,
    public _ticketService: TicketService,
    public store: Store<TicketState.State>
  ) {
    this.cities$ = this.store.select(TicketState.getCities);
    console.log(this.cities$);
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
      //       // this.store.dispatch(new Action.SearchTicket({name: 123}));
      //       // this.store.dispatch(ticketModel);
    }
    // this.model.push(this.ticketModel);
    // console.log(this.model);
  }

}

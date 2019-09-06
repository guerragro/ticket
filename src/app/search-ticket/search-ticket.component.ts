import { Component, OnInit } from '@angular/core';
import { TicketModel } from '../model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';

import * as Action from '../redux/ticket.action';

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

  constructor(
    public store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.store.select('searchTicket').subscribe()
  }

  search(event) {
    if (this.origin == '' && this.destination == '' && this.departureDate == '' && this.arrivalDate == '') {
      return;
    } else {
      this.id++;
      // const ticketModel = new TicketModel(this.origin, this.destination, this.departureDate, this.arrivalDate, this.id);
      // console.log(ticketModel);
      this.store.dispatch(new Action.SearchTicket({name: 123}));
      // this.store.dispatch(ticketModel);
    }
    // this.model.push(this.ticketModel);
    // console.log(this.model);
  }

}

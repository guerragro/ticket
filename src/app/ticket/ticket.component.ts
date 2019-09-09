import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import {TicketModel, TicketInterface, CitiesModel} from '../model';
import { fromMobx } from 'ngx-mobx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { TicketStore } from '../mobx/TicketStore';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';

import * as Action from '../redux/ticket.action';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // origin: string;
  // destination: string;
  // departureDate: any;
  // arrivalDate: any;
  // price: any;
  // id: number = 0;
  // ticketModel: TicketModel;
  // model: TicketModel[] = [];

  cities;
  ticket: TicketModel[];

  tickets;

  // public _ticketState: Observable<ticket>;

  constructor(
    public _ticketService: TicketService,
    public _ticketStore: TicketStore,
    public store: Store<AppState>
  ) {}

  ngOnInit() {
    this._ticketService.getDataCities().subscribe(
      (res: []) => this.store.dispatch(new Action.Cities(res)),
      err => console.log(err)
    );
    this.store.select('searchTicket').subscribe(
      res => {
        this.cities = res['cities'];
        console.log(this.cities);
        console.log(res);
      }
    );
  }
  // search(event) {
  //   if (this.origin == '' && this.destination == '' && this.departureDate == '' && this.arrivalDate == '') {
  //     return;
  //   } else {
  //     this.id++;
  //     // поиск кода города
  //     // this.origin = this.arr.filter(a => a.name === this.origin);
  //     // this.destination = this.arr.filter(a => a.name === this.destination);
  //     // console.log(this.origin, this.destination);
  //     // console.log(this.origin[0]['code'], this.destination['code']);
  //     this.ticketModel = new TicketModel(this.origin, this.destination, this.departureDate, this.arrivalDate, this.price, this.id);
  //     console.log(this.ticketModel);
  //   }
  //   this.model.push(this.ticketModel);
  //   // console.log(this.model);
  // }
}

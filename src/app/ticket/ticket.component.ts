import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

import {select, Store} from '@ngrx/store';
import 'rxjs/add/operator/do';
import * as fromCitiesWeather from '../store/actions/cities.action';
import * as fromState from '../store/states/app.state';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(
    public store: Store<fromState.AppState>
  ) {}

  ngOnInit() {
    // TODO all for NGRX
    // как только вызывается этот action, срабатывает effects
    this.store.dispatch(new fromCitiesWeather.LoadCities());
    // получение текущего состояния
    this.store.subscribe(
      res => console.log(res)
    );
  }
}

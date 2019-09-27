import { Component, OnInit } from '@angular/core';
import { CitiesModel, TicketModel } from '../model';
import {TicketService} from '../service/ticket.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAction from '../redux/ticket.action';
import * as appState from '../redux/app.state';
import {State} from '../redux/ticket.reducer';

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
  checked: boolean;
  name: any = [];
  test2: any;
  test3: any;
  arr = [];
  ticket: any;
  VVO: any;
  LAX: any;

  cities$: Observable<CitiesModel[]>;
  cities;

  constructor(
    public store: Store<appState.State>,
    public service: TicketService
  ) {
    // получения состояния по городам
    this.cities$ = this.store.select(appState.getStateCities);
    this.cities$.subscribe(res => this.cities = res);
    // console.log(this.cities);
    // console.log(this.cities$);
  }

  ngOnInit() {
  }

  // search(event) {
  //   if (this.origin === '' && this.destination === '' && this.departureDate === '' && this.arrivalDate === '') {
  //     return;
  //   } else {
  //     this.id++;
  //     // this._ticketService.getPriceList(new TicketModel(this.origin, this.destination)).subscribe(
  //     //   res => console.log(res),
  //     //   err => console.log(err)
  //     // );
  //     // const ticketModel = new TicketModel(this.origin, this.destination, this.departureDate, this.arrivalDate, this.id);
  //     //       // console.log(ticketModel);
  //     // this.store.select(new fromAction.TicketReQ(new TicketModel(this.origin, this.destination)));
  //     this._ticketService.getDataMonth(new TicketModel(this.origin, this.destination)).subscribe(
  //       res => {
  //         this.store.dispatch(new fromAction.TicketReS(res));
  //         console.log(res);
  //       },
  //       err => console.log(err)
  //     );
  //     // this.store.dispatch(new fromAction.Ticket());
  //     //       // this.store.dispatch(ticketModel);
  //   }
  //   // this.model.push(this.ticketModel);
  //   // console.log(this.model);
  // }

  // true = цены с партнерским маркетом, false наоборот
  onToggle(event) {
    console.log(event.target.checked);
    this.checked = event.target.checked;
  }

  // как это должно работать, если есть прямой вылет, значит отключаем этот поиск
  // LAX - Лос Анджелес
  // DPS - Бали
  // BKK - Бангкок
  // HAV - Гавана
  // MOW - Москва
  // найдены общие города для построения маршрута (todo fix)
  // теперь нужно получить самые дешевые вылеты от origin до общего города
  search(data) {
    // this.store.dispatch(new fromAction.SearchTicket());
    this.service.getTest(this.origin).subscribe(
      (res: []) => this.VVO = res['directions']
    );
    this.service.getTest(this.destination).subscribe(
      (res: []) => this.LAX = res['directions']
    );
    // посколько запрос долго обрабатывается нужну таймаут !!!! решить проблему позже
    setTimeout(() => this.check(this.VVO, this.LAX), 10000);
  }
  check(a, b) {
    this.VVO = a.filter(x => x.direct === true);
    console.log(this.VVO);
    this.LAX = b.filter(y => y.direct === true);
    console.log(this.LAX);
    this.name = this.VVO.filter(x => this.LAX.some(y => x.iata === y.iata));
    // this.name.iata храниться общий города
    console.log(this.name);
  }
}

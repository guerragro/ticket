import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CitiesModel, TicketModel } from '../model';
import {TicketService} from '../service/ticket.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAction from '../redux/ticket.action';
import * as appState from '../redux/app.state';
import {State} from '../redux/ticket.reducer';


import {MobxStore} from '../mobx/mobxstore';
import {fromMobx} from 'ngx-mobx';

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
  ticket: any = [];
  VVO: any;
  LAX: any;

  cities$: Observable<CitiesModel[]>;
  cities;

  @Input() _Heroname: string | number;

  @Input()
  set Heroname(value) {
    if (value > 13) {
      this._Heroname = 'Еще молодой';
    } else if (value < 34) {
      this._Heroname = 'Лох это судьба';
    } else {
      this._Heroname = null;
    }
  }
  get Heroname() {
    return this._Heroname;
  }
  @Output() hello = new EventEmitter<boolean>();
  change(a) {
    this.hello.emit(a);
  }

  constructor(
    // TODO redux
    public store: Store<appState.State>,
    // TODO mobx
    public mobxstore: MobxStore,
    public service: TicketService
  ) {}

  ngOnInit() {
    // TODO redux
    // получения состояния по городам
    this.cities$ = this.store.select(appState.getStateCities);
    this.cities$.subscribe(res => this.cities = res);
    // TODO mobx
    // запускает экшен, для получения списка городов
    // this.mobxstore.getDataCities();
    // this.cities$ = fromMobx(() => this.mobxstore.DataCities());
    // console.log(this.cities$);
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
  // (TODO FIX) = Понять какие данные нужно для запроса
  // (TODO FIX) = Найдены общие города для построения маршрута
  search(data) {
    // this.store.dispatch(new fromAction.SearchTicket());
    this.service.getTest(this.origin).subscribe(
      (res: []) => this.VVO = res['directions']
    );
    this.service.getTest(this.destination).subscribe(
      (res: []) => this.LAX = res['directions']
    );
    // (TODO FIX) = посколько запрос долго обрабатывается нужнен таймаут
    setTimeout(() => this.check(this.VVO, this.LAX), 10000);
  }
  check(a, b) {
    // город отправления
    this.VVO = a.filter(x => x.direct === true);
    console.log(this.VVO);
    // город прибытия
    this.LAX = b.filter(y => y.direct === true);
    console.log(this.LAX);
    // список общих городов
    this.name = this.VVO.filter(x => this.LAX.some(y => x.iata === y.iata));
    console.log(this.name);
  //  (TODO FIX) = НУЖНО ПОНЯТЬ КАКИМ ОБРАЗОМ ИЛИ В КАКОМ ВИДЕ ПОЛУЧАТЬ СПИСОК ЦЕН
  //  нужно отправить запрос город отлета + общий город = цена; общий город + город прибытия = цена; складываем
  //  (TODO FIX) = Будет слишком много запросов (как сделать по другому?)
  //  ищем самый дешевый билет
  //  рабочий вариант по получению цена по общим направлениям
    setTimeout(() => {this.name.forEach(a =>
      this.service.getDataMonth(this.origin, a['iata']).subscribe(
      res => this.ticket.push(res))); }, 5000);
    setTimeout(() => {
      this.service.getDataMonth(this.name[0]['iata'], this.destination).subscribe(
        res => console.log(res)
      );
    }, 5000);
    console.log(this.ticket);
  }
}

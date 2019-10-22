import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import {TicketModel} from '../model/model';
import {select, Store} from '@ngrx/store';
import * as fromCitiesAction from '../store/actions/cities.action';
import * as fromState from '../store/states/app.state';
import {from, of, Subject} from 'rxjs';
import { Observable } from 'rxjs';
import {LoadSearchOk} from '../store/actions/search.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    public service: SearchService,
    public store: Store<fromState.AppState>
  ) {}

  origin: string;
  destination: string;
  departureDate: any;
  arrivalDate: any;

  // // TODO NGRX
  // cities$: Observable<CitiesModel[]>;
  cities;

  ngOnInit() {
    // TODO all for NGRX
    // как только вызывается этот action, срабатывает effects
    this.store.dispatch(new fromCitiesAction.LoadCities());
    // получение текущего состояния
    this.store.subscribe(
      res => console.log(res)
    );
  }
  search(event) {
    // this.cities = new TicketModel(this.origin, this.destination);
    // console.log(this.cities);
    // this.service.getPriceMonth().subscribe(
    //   res => console.log(res)
    // );
    // this.origin = this.cities.cities.filter(city => (city.name === this.origin) ? city.IATA : false);
    this.store.dispatch(new LoadSearchOk(['123']));
  }

  // // LAX - Лос Анджелес
  // // DPS - Бали
  // // BKK - Бангкок
  // // HAV - Гавана
  // // MOW - Москва
  // // TODO FIX = Понять какие данные нужно для запроса
  // // TODO FIX = Найдены общие города для построения маршрута
  // search(data) {
  //   // this.store.dispatch(new fromAction.SearchTicket());
  //   this.service.getTest(this.origin).subscribe(
  //     (res: []) => this.VVO = res['directions']
  //   );
  //   this.service.getTest(this.destination).subscribe(
  //     (res: []) => this.LAX = res['directions']
  //   );
  //   // TODO FIX = посколько запрос долго обрабатывается нужен таймаут
  //   setTimeout(() => this.check(this.VVO, this.LAX), 10000);
  // }
  // check(a, b) {
  //   // город отправления
  //   this.VVO = a.filter(x => x.direct === true);
  //   console.log(this.VVO);
  //   // город прибытия
  //   this.LAX = b.filter(y => y.direct === true);
  //   console.log(this.LAX);
  //   // список общих городов
  //   this.name = this.VVO.filter(x => this.LAX.some(y => x.iata === y.iata));
  //   console.log(this.name);
  // //  TODO FIX = НУЖНО ПОНЯТЬ КАКИМ ОБРАЗОМ ИЛИ В КАКОМ ВИДЕ ПОЛУЧАТЬ СПИСОК ЦЕН
  // //  нужно отправить запрос город отлета + общий город = цена; общий город + город прибытия = цена; складываем
  // //  TODO FIX = Будет слишком много запросов (как сделать по другому?)
  // //  ищем самый дешевый билет
  // //  рабочий вариант по получению цена по общим направлениям
  //   setTimeout(() => {this.name.forEach(a =>
  //     this.service.getDataMonth(this.origin, a['iata']).subscribe(
  //     res => this.search.push(res))); }, 5000);
  //   setTimeout(() => {
  //     this.service.getDataMonth(this.name[0]['iata'], this.destination).subscribe(
  //       res => console.log(res)
  //     );
  //   }, 5000);
  //   console.log(this.search);
  // }
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
}

import { Injectable } from '@angular/core';
import { action, observable, computed } from 'mobx';

import { TicketService } from '../service/ticket.service';
import { TicketModel } from '../model';

@Injectable()
export class ScannerStore {

  // то что будет отслеживаться
  // будет формироваться все билеты
  // @observable ticket: TicketModel;

  @observable ticket: TicketModel;

  @observable cities: any;

  constructor(
    private ticketService: TicketService
  ) {}

  @action CitiesList(data) {
    this.cities = data;
    console.log(this.cities);
  }

  @action dataTicket(data) {
    // this.ticket = new TicketModel(data)
  }

  // Всякие мысли

  // будет отслеживать список билетов
  // будет менять отраженные данные по билетам
  // делаю запрос выводится список билетов

  // здесь я могу соединять observable
  // @computed get FullTicket() {
  //   return ticket + ticket
  // }
}
// хранит данные о городах и странах, спецпредложениям

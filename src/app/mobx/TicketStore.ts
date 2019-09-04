import { Injectable } from '@angular/core';
import { action, observable, computed } from 'mobx';

import { TicketService } from '../service/ticket.service';
import {of} from 'rxjs';
import {CitiesModel, TicketModel} from '../model';

@Injectable()
export class TicketStore {

  constructor(
    private ticketService: TicketService
  ) {}

  @observable cities: CitiesModel[] = [
    new CitiesModel('Khabarovsk', 195),
    new CitiesModel('Linengrad', 250)
  ];
  // @observable cities: any = [];

  @observable ticket;

  @action getDataCities() {
    this.ticketService.getDataCities().subscribe(
      res => {
        // this.cities = res;
        // console.log(this.cities);
      },
      err => console.log(err)
    );
  }

  @computed get DataCities() {
    return this.cities;
  }
}

import { Injectable } from '@angular/core';
import {action, computed, observable} from 'mobx';

import { TicketService } from '../service/ticket.service';
import {CitiesModel} from '../model';

@Injectable()
export class MobxStore {

  constructor(
    public service: TicketService
  ) {}

  // наше состояние
  @observable cities;

  @observable initState = {
    cities: []
  };

  @action getDataCities() {
    this.service.getDataCities().subscribe(
      res => {
              this.cities = res;
              this.initState.cities = res;
              console.log(this.cities);
              console.log(this.initState);
      },
      err => console.log(err)
    );
  }
  @computed get DataCities() {
    return this.cities;
  }
  @computed get InitState() {
    return this.initState;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlModels } from '../api';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) {
  }

  getDataCities() {
    const params = {
      token: '49679098347c457387656573a8437d2d'
    };
    return this.http.get(UrlModels.Cities, {params: (params)});
  }
  // public getPriceList() {
  //   const params = {
  //       origin: 'VVO',
  //       destination: 'SEL',
  //       beginning_of_period: '2019-10-01',
  //       period_type: 'month',
  //       // sorting: 'price',
  //       month: '10',
  //       limit: '50',
  //       token: '49679098347c457387656573a8437d2d'
  //     };
  //   return this.http.get(UrlModels.PriceList, {params: (params)});
  // }
  public getPriceList(data) {
    const params = data;
    console.log(params);
    // const params = {
    //   origin: 'VVO',
    //   destination: 'SEL',
    //   beginning_of_period: '2019-10-01',
    //   period_type: 'month',
    //   // sorting: 'price',
    //   month: '10',
    //   limit: '50',
    //   token: '49679098347c457387656573a8437d2d'
    // };
    return this.http.get(UrlModels.PriceList, {params: (params)});
  }

  // getSpecial() {
  //   return this.http.get(UrlModels.Special);
  // }
  //
  getPopular() {
    const params = {
      origin: 'VVO',
      token: '49679098347c457387656573a8437d2d'
    };
    return this.http.get(UrlModels.Popular, {params: (params)});
  }
}

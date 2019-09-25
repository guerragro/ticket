import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlModels } from '../api';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getDataMonth(data) {
    // console.log(data);
    // const params = {
    //   origin: 'VVO',
    //   destination: 'SEL',
    //   month: 'undefiend',
    //   token: '49679098347c457387656573a8437d2d'
    // };
    const params = Object.assign(data, {token: '49679098347c457387656573a8437d2d'});
    // console.log(params);
    return this.http.get(UrlModels.DataMonth, {params: (params)});
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
    const params = Object.assign(data, {token: '49679098347c457387656573a8437d2d'});
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
    // return this.http.get(UrlModels.PriceList, {headers: (headers)});
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

  getPriceMonth() {
    const params = {
      origin: 'VVO',
      destination: 'DPS',
      depart_date: '2019-10',
      return_date: '2019-10',
      token: '49679098347c457387656573a8437d2d'
    };
    const headers = {
      'Access-Control-Allow-Origin': '*'
    };
    return this.http.get(UrlModels.PriceMonth, {params: (params)});
  }
  // список городов
  getDataCities(): Observable<any> {
    const params = {
      token: '49679098347c457387656573a8437d2d'
    };
    return this.http.get<any>(UrlModels.Cities, {params: (params)});
  }

  getDataSpecial() {
    return this.http.get(UrlModels.Special);
  }
  // getPriceList() {
  //   const params = {
  //     origin: 'VVO',
  //     destination: 'SEL',
  //   };
  //   return this.http.get(UrlModels.PriceList, {params: (params)});
  // }
  getTest(data) {
    const params = {
      origin_iata: data,
      one_way: true
    };
    return this.http.get('http://map.aviasales.ru/supported_directions.json',
      {params: (params)});
  }
}

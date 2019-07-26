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

  public getPriceList() {
    const params = {
        currency: 'rub',
        period_type: 'year',
        page: '1',
        limit: '30',
        show_to_affiliates: 'true',
        sorting: 'price',
        token: '49679098347c457387656573a8437d2d'
      };
    return this.http.get(UrlModels.PriceList, {params: (params)});
  }

  public getCheapTik() {
    const params = {
      origin: 'BQJ',
      destination: 'SEL',
      depart_date: '2019-10',
      return_date: '2019-10',
      token: '49679098347c457387656573a8437d2d'
    };
    const headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials': 'true'
    };
    return this.http.get(UrlModels.CheapTik, {headers: (headers), params: (params), responseType: 'text'});
  }

  // getDataCounty() {
  //   const headers = {
  //     'Access-Control-Allow-Origin' : 'http://127.0.0.1:4200',
  //     'Access-Control-Allow-Credentials': 'true'
  //   };
  //   const params = {
  //     token: '49679098347c457387656573a8437d2d'
  //   };
  //   return this.http.get('http://api.travelpayouts.com/data/en/' +
  //     'cities.json', {headers: (headers), params: (params)});
  // }
}

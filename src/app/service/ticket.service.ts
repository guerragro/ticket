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
        origin: 'VVO',
        destination: 'SEL',
        beginning_of_period: '2019-10-01',
        period_type: 'month',
        // sorting: 'price',
        month: '10',
        limit: '50',
        token: '49679098347c457387656573a8437d2d'
      };
    return this.http.get(UrlModels.PriceList, {params: (params)});
  }


  public getCheapTik() {
    const params = {
      origin: 'VVO',
      destination: 'SEL',
      // depart_date: '2019-10',
      // return_date: '2019-10',
      token: '49679098347c457387656573a8437d2d'
    };
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    };
    return this.http.get(UrlModels.CheapTik, {params: (params)});
  }

  getDataCities() {
    const headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials': 'true'
    };
    const params = {
      token: '49679098347c457387656573a8437d2d'
    };
    // const headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin : *', '');
    // return this.http.get('http://api.travelpayouts.com/data/en/' +
    //   'cities.json', { params: (params)});
    return this.http.get(UrlModels.Cities, {params: (params)});
  }

  getDataMonth() {
    // const params = Object.assign(
    //   {token: '49679098347c457387656573a8437d2d'}, data
    // );
    const params = {
      origin: 'VVO',
      destination: 'BJS',
      // depart_date: '2019-10',
      token: '49679098347c457387656573a8437d2d'
    };
    return this.http.get(UrlModels.DataMonth, {params: (params)});
  }
  getDataSpecial() {
    return this.http.get(UrlModels.Special);
  }

  getPopular() {
    const params = {
      origin: 'VVO',
      token: '49679098347c457387656573a8437d2d'
    };
    return this.http.get(UrlModels.Popular, {params: (params)});
  }
}

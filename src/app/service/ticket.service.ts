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
        year: '2019',
        sorting: 'price',
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
  getDataCountries() {
    const params = {
      token: '49679098347c457387656573a8437d2d'
    };
    return this.http.get(UrlModels.Countries, {params: (params)});
  }
}

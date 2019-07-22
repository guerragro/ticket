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

  // getDataCounty() {
  //   const params = {
  //     token: '49679098347c457387656573a8437d2d'
  //   };
  //   const headers = [
  //     {'Access-Control-Allow-Origin': '*'},
  //     {'Access-Control-Allow-Headers': '*'},
  //     {'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTION'}
  //   ];
  //   return this.http.get('http://api.travelpayouts.com/data/en/' +
  //     'cities.json', {headers: (headers), params: (params)});
  // }
}
// $http.post("http://localhost:8080/yourresource", parameter, {headers:
//     {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })

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

  public getTicket() {
    return this.http.get(UrlModels.PriceList);

  }

  public getCheapTik() {
    return this.http.get('http://api.travelpayouts.com/v1/prices/cheap' +
      '?origin=BQJ&destination=SEL&depart_date=2019-11&return_date=2019-12&token=49679098347c457387656573a8437d2d');
  }

  getDataCounty() {
    const params = [
      {
        code: 'NC',
        name: 'New Caledonia',
      }
    ];
    return this.http.get(UrlModels.Country, params);
}

  // { headers?: HttpHeaders | { [header: string]: string | string[]; };
  // observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; };
}

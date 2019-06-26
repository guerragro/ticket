import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UrlModels } from './api';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) { }

  // API Token:
  // 49679098347c457387656573a8437d2d

  public getTicket() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.travelpayouts.com/v2/prices/latest?token=49679098347c457387656573a8437d2d');
    // tslint:disable-next-line:max-line-length
    // return this.http.get('http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=49679098347c457387656573a8437d2d');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlModels } from '../model/url.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) {}

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
}

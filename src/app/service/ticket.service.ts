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

  public getTicket() {
    return this.http.get(UrlModels.PriceList);
  }

  // public getCheapTik() {
  //   return this.http.get('http://api.travelpayouts.com/v1/prices/cheap' +
  //     '?origin=BQJ&destination=SEL&depart_date=2019-11&return_date=2019-12&token=49679098347c457387656573a8437d2d');
  // }

  getDataCounty(): Observable <any> {
    const header = {
      ['Access-Control-Allow-Origin']: '49679098347c457387656573a8437d2d',
      // ['x-access-token']: '49679098347c457387656573a8437d2d',
    };
    // return this.http.get(UrlModels.Country, params);
    return this.http.get('http://api.travelpayouts.com/data/en/cities.json' + header, {headers: header});
  }
  // error TS2559: Type '{ code: string; name: string; }[]' has no properties in common with type
  // тип данных не соответствует
  // { headers?: HttpHeaders | { [header: string]: string | string[]; };
  // заголовок
  // observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; };
  // reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; }'.
  // Type 'string' has no properties in common with type '{ headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; }'.
  // связана с передачей неверных параметров в функцию http.get .
  // Второй параметр для http.get должен быть заголовком. Если вы хотите передать параметр в get, включите его в качестве параметра URL.
  //
  // return this.http.get<Data>('http://localhost:8000/api/character/?name='+name);
  // { headers?: HttpHeaders | { [header: string]: string | string[]; };
  // observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; };
  // http://api.travelpayouts.com/data/en/cities.json

  // пример запроса
  // public static apiWaresPallet: string = UrlModels.service1c + '/mp/wareschange';
  // moveWareToBox(data: Object): Observable<any> {
  //   const params = Object.assign({userId: this.user_id}, data);
  //   return this._restService.post(UrlModels.apiWaresPallet, params)
  // }
  // Формат запроса:
  // {
  //   "userId": 27,
  //   "mpbarcode": "M04997",
  //   "palletbarcode": "PG084101",
  //   "waresSet": [
  //     {
  //       "scannedBarcode": "4600761314185",
  //       "WCODE": "158959",
  //       "WNAME": "Чипсы Принглс 40г паприка",
  //       "customAmount": 3,
  //       "bestbeforedate": "01.04.2017"
  //     },
  //     {
  //       "scannedBarcode": "",
  //       "WCODE": "158976",
  //       "WNAME": "Чипсы Принглс 165г сыр",
  //       "customAmount": 5,
  //       "bestbeforedate": "01.04.2017"
  //     }
  //   ]
  // }
  // const params = {
  //   mpbarcode: this.scannedSite['barcode'],
  //   palletbarcode: this.task.pallet,
  //   waresSet: [
  //     {
  //       scannedBarcode: '',
  //       WCODE: this.scannedWare['data']['code'],
  //       WNAME: this.scannedWare['data']['name'],
  //       customAmount: amount,
  //       bestbeforedate: ''
  //     }
  //   ]
  // };
}

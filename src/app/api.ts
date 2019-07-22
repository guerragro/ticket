import { Injectable } from '@angular/core';

@Injectable()

export class UrlModels {

  // Token:
  // 49679098347c457387656573a8437d2d

  // ? это метод get

  // Список цен, найденный  за последние 48 часов пользователями по заданным фильтрам
  public static PriceList = 'http://api.travelpayouts.com/v2/prices/latest';

  //   Параметры запроса
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // origin — пункт отправления. IATA код города или код страны. Длина не менее 2 и не более 3 символов.
  // destination — пункт назначения. IATA код города или код страны. Длина не менее 2 и не более 3.
  // Обратите внимание! Если не указывать пункт отправления и назначения, то API вернет 30 самых дешевых билетов,
  // которые были найдены за последние 48 часов. При этом нельзя использовать period_type=month.
  // beginning_of_period — первое число месяца, в который попадают даты отправления (в формате YYYY-MM-DD, например 2018-05-01).
  // Обязательно указывать при period_type равном month. Если указать только beginning_of_period, то period_type можно не указывать.
  // period_type — период, в котором искали билеты. Если период не указан, то отображаются билеты для перелётов в текущем месяце.
  // year — билеты, найденные в текущем году.
  // month — за указанный в beginning_of_period месяц.
  // one_way — true — в одну сторону, false — туда и обратно. Значение по умолчанию — false.
  // page — номер страницы. Значение по умолчанию — 1.
  // limit— количество записей на странице. Значение по умолчанию — 30. Не более 1000.
  // show_to_affiliates — false—все цены, true—только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // sorting — сортировка цен:
  // price — по цене (значение по умолчанию). Для направлений город — город возможна сортировка только по цене.
  // route — по популярности маршрута.
  // distance_unit_price — по цене за километр.
  // trip_duration — длительность пребывания в неделях.

  // Параметры ответа
  // {
  //      "success" : true ,
  //      "data" : [
  //         {
  //              " show_to_affiliates " : true ,
  //              " trip_class " : 0 ,
  //              " origin " : "WMI" ,
  //              " destination " : "WRO" ,
  //              " assign_date " : "2015-12-07" ,
  //              " return_date " : "2015-12-13 " ,
  //              " number_of_changes " : 0 ,
  //              " value " : 1183 ,
  //              " found_at " : " 2015-09-22T14: 08: 45 + 04:00 " ,
  //              " distance " : 298,
  //              " actual " : верно
  //         }
  //     ]
  // }
  // origin  - пункт отправления.
  // destination  - пункт назначения.
  // show_to_affiliates  - false-все цены, true-только цены, найденные с помощью партнерского маркера (рекомендуется).
  // trip_class  - класс полета:
  // 0  - Эконом класс,
  // 1  - Бизнес класс,
  // 2  - Первый
  // depart_date  - дата вылета.
  // return_date  - дата возврата.
  // number_of_changes  - количество переводов.
  // value  - стоимость полета, в указанной валюте.
  // found_at  - время и дата, в которую билет был найден.
  // distance  - расстояние между пунктом отправления и пунктом назначения.
  // actual  - актуальность предложения.
  // token  - индивидуальный партнерский токен.

  // Возвращает самые дешевые билеты безпересадок, а также с 1 или 2 пересадками по выбранному маршруту с фильтрами.
  public static CheapTik = 'http://api.travelpayouts.com/v1/prices/cheap';

  // Параметры запроса
  // origin — IATA код города отправления. Заглавными буквами.
  // destination — IATA код города назначения (для всех городов "-").
  // depart_date (optional) — дата отправления (yyyy-mm).
  // return_date (optional) — дата прибытия (yyyy-mm).
  // page — необязательный параметр, отвечает за отражение найденных данных.
  // token — индивидуальный токен.
  // currency — валюта. По умолчанию RUB.
  // BQJ - владивосток
  // SEL - Сеул

  // Параметры ответа
  //   0, 1, 2 - порядковый номер в результатах поиска
  //   price - цена билета (в валюте, указанной в параметре валюты)
  //   airline - код IATA авиакомпании, выполняющей рейс
  //   flight_number - номер рейса
  //   departure_at - Дата отправления
  //   return_at - дата возврата
  //   expires_at - дата истечения срока действия найденной цены (UTC+0)
  // {
  //   "success" : true ,
  //   "data" : {
  //     "HKT" : {
  //       "0" : {
  //         "цена" : 35443 ,
  //         "авиакомпания" : "UN" ,
  //         "номер рейса" : 571 ,
  //         "вылет_at " : "2015-06 -09T21: 20: 00Z " ,
  //         " return_at " : " 2015-07-15T12: 40: 00Z " ,
  //         " expires_at " : " 2015-01-08T18:30: 40Z "
  //       }, " 1 " : {
  //
  //         "цена" : 27506 ,
  //         "авиакомпания" : "CX" ,
  //         "номер рейса" : 204 ,
  //         "вылет" : "2015-06-05T16: 40: 00Z" ,
  //         "возвращение_at" : "2015-06-22T12: 00: 00Z " ,
  //         " expires_at " : " 2015-01-08T18: 38: 45Z "
  //       }, " 2 " : {
  //         " цена " : 31914 ,
  //         " авиакомпания " : " AB ", номер
  //         рейса : 8113
  //         ,
  //         " вылет_от " : "2015-06-12T13: 45: 00Z" ,
  //         "return_at" : "2015-06-24T20: 30: 00Z" ,
  //         "expires_at" : "2015-01-08T15: 17: 42Z"
  //       }
  //     }
  //   }
  // }

  // Данные города в формате JSON
  public static Country = 'http://api.travelpayouts.com/data/en/cities.json';

  // Параметры ответа
  // code — IATA-code страны.
  // name — Название страны.
  // currency — Валюта страны.
  // name_translations  — Название страны на других языках.
  // [
  //   {
  //     "code": "NC",
  //     "name": "New Caledonia",
  //     "currency": "XPF",
  //     "name_translations": {
  //       "de": "Neukaledonien",
  //       "en": "New Caledonia",
  //       "zh-CN": "新喀里多尼亚",
  //       "tr": "Yeni Kaledonya",
  //       "ru": "Новая Каледония",
  //       "fr": "Nouvelle-Calédonie",
  //       "es": "Nueva Caledonia",
  //       "it": "Nuova Caledonia",
  //       "th": "ประเทศนิวแคลิโดเนีย"
  //      }
  //     }
  //   ]

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

  // error TS2559: Type '{ code: string; name: string; }[]' has no properties in common with type
  // тип данных не соответствует
  // { headers?: HttpHeaders | { [header: string]: string | string[]; };
  // url {headers: {''}: ''}; ''; {['']: ''}
  // заголовок
  // observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; };
  // reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; }'
  // {headers: {'*': ''}}.
}

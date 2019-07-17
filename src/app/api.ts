import { Injectable } from '@angular/core';

@Injectable()

export class UrlModels {

  // Token:
  // 49679098347c457387656573a8437d2d

  // ? это метод get

  // Список цен, найденный  за последние 48 часов пользователями по заданным фильтрам
  public static PriceList = 'http://api.travelpayouts.com/v2/prices/latest?' +
    'currency=rub&period_type=year&page=1&limit=30&' +
    'show_to_affiliates=true&sorting=price&token=49679098347c457387656573a8437d2d';

  // http://api.travelpayouts.com/v2/prices/latest
  //
  //   Параметры запроса
  //
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // origin — пункт отправления. IATA код города или код страны. Длина не менее 2 и не более 3 символов.
  // destination — пункт назначения. IATA код города или код страны. Длина не менее 2 и не более 3.
  // Обратите внимание! Если не указывать пункт отправления и назначения, то API вернет 30 самых дешевых билетов, которые были найдены за последние 48 часов. При этом нельзя использовать period_type=month.
  //
  // tslint:disable-next-line:max-line-length
  //   beginning_of_period — первое число месяца, в который попадают даты отправления (в формате YYYY-MM-DD, например 2018-05-01). Обязательно указывать при period_type равном month. Если указать только beginning_of_period, то period_type можно не указывать.
  // period_type — период, в котором искали билеты. Если период не указан, то отображаются билеты для перелётов в текущем месяце.
  // year — билеты, найденные в текущем году.
  // month — за указанный в beginning_of_period месяц.
  // one_way — true — в одну сторону, false — туда и обратно. Значение по умолчанию — false.
  // page — номер страницы. Значение по умолчанию — 1.
  // limit— количество записей на странице. Значение по умолчанию — 30. Не более 1000.
  // tslint:disable-next-line:max-line-length
  // show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // sorting — сортировка цен:
  //   price — по цене (значение по умолчанию). Для направлений город — город возможна сортировка только по цене.
  // route — по популярности маршрута.
  // distance_unit_price — по цене за километр.
  // trip_duration — длительность пребывания в неделях.

  // Пример запроса
  // tslint:disable-next-line:max-line-length
  // http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=РазместитеЗдесьВашТокен

  public static CheapTik = 'http://api.travelpayouts.com/v1/prices/cheap';

  // origin — IATA код города отправления. Заглавными буквами.
  // destination — IATA код города назначения (для всех городов "-").
  // depart_date (optional) — дата отправления (yyyy-mm).
  // return_date (optional) — дата прибытия (yyyy-mm).
  // page — необязательный параметр, отвечает за отражение найденных данных.
  // token — индивидуальный токен.
  // currency — валюта. По умолчанию RUB.
  // BQJ - владивосток
  // SEL - Сеул

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

  public static Country = 'http://api.travelpayouts.com/data/en/cities.json?token=49679098347c457387656573a8437d2d';

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

  // Request
  // origin — IATA code of the departure city. IATA code is shown by uppercase letters, for example, MOW.
  // destination — IATA code of the destination city (for all routes, enter "-"). IATA code is shown by uppercase letters, for example, MOW.
  // depart_date (optional) — month of departure (yyyy-mm).
  // return_date (optional) — month of return (yyyy-mm).
  // page — optional parameter, is used to display the found data (by default the page displays 100 found prices. If the destination isn't selected, there can be more data. In this case, use the page, to display the next set of data, for example, page=2).
  // token — individual affiliate token.
  // currency — the currency of prices. The default value is RUB.
  // http://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2017-11&return_date=2017-12&token=PutHereYourToken
}

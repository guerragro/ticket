import { Injectable } from '@angular/core';

@Injectable()

export class UrlModels {

  // tslint:disable-next-line:max-line-length
  public static PriceList = 'http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=49679098347c457387656573a8437d2d';
  // Запрос
  //
  // http://api.travelpayouts.com/v2/prices/latest
  //
  //   Параметры запроса
  //
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // origin — пункт отправления. IATA код города или код страны. Длина не менее 2 и не более 3 символов.
  // destination — пункт назначения. IATA код города или код страны. Длина не менее 2 и не более 3.
  // tslint:disable-next-line:max-line-length
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

  // Пример ответа
  // {
    //   "success": true,
    //   "data": [
    //     {
    //       "show_to_affiliates": true,
    //       "origin": "WMI",
    //       "destination": "WRO",
    //       "depart_date": "2015-12-07",
    //       "return_date": "2015-12-13",
    //       "number_of_changes": 0,
    //       "value": 1183,
    //       "found_at": "2015-09-22T14:08:45+04:00",
    //       "distance": 298,
    //       "actual": true
    //     }
    //     ]
    // }
  документация
  // https://support.travelpayouts.com/hc/ru/articles/203956163-API-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC#09
  // https://travelpayouts.github.io/slate/

}

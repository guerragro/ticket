import { Injectable } from '@angular/core';

@Injectable()

export class UrlModels {

  // https://support.travelpayouts.com/hc/ru/articles/203956163-Aviasales-API-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B4%D0%BB%D1%8F-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B
  // Цены на авиабилеты:
  // Возвращает список цен, найденных нашими пользователями за последние 48 часов,
  // в соответствии с выставленными фильтрами.
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

  // Календарь цен на месяц:
  // Возвращает цены за каждый день месяца, сгруппированные по количеству пересадок.

  public static All = 'http://api.travelpayouts.com/v2/prices/month-matrix';
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // origin — пункт отправления. IATA код города. Длина 3 символов. Значение по умолчанию LED.
  // destination — пункт назначения. IATA код города. Длина 3 символа. Значение по умолчанию HKT.
  // Обратите внимание! Если не указывать пункт отправления и назначения, то API вернет список самых дешевых билетов, которые были найдены за последние 48 часов.
  // show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // month — первый день месяца, в формате «YYYY-MM-DD». По умолчанию используется месяц, следующий за текущим.
  // trip_duration — длительность пребывания в неделях. Если не указано, то в результате будут билеты в одну сторону.

  // Параметры ответа
  //
  // success — результат запроса.
  // data — полученные данные:
  //   origin — пункт отправления.
  // destination — пункт назначения.
  // show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // trip_class — класс перелёта (только 0 — Эконом).
  // depart_date — дата отправления.
  // return_date — дата возвращения.
  // number_of_changes — количество пересадок.
  // value — стоимость перелета, в указанной валюте.
  // found_at — время и дата, когда был найден билет.
  // distance — расстояние между пунктом вылета и назначения.
  // actual — является ли предложение актуальным.

  // Цены по альтернативным направлениям
  // Возвращает цены на направления между ближайшими к целевым городам.
  public static AltDest = 'http://api.travelpayouts.com/v2/prices/nearest-places-matrix';

  // Параметры запроса
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // origin — пункт отправления. IATA код города или код страны. Длина не менее 2 и не более 3 символов.
  // destination — пункт назначения. IATA код города или код страны. Длина не менее 2 и не более 3.
  // show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // depart_date — дата отправления в формате 'YYYY-MM-DD'.
  // return_date — дата возвращения в формате 'YYYY-MM-DD'.
  // distance — расстояние (в километрах) от пунктов назначения и отправления, на котором ищутся соседние города.
  // limit — количество выводимых вариантов от 1 до 20. Где 1 - это только вариант с указанными пунктами назначения и отправления.
  // flexibility — расширение диапазона дат в большую и меньшую сторону. Значение может быть от 0 до 7, где 0 - в результате будут только варианты на указанные даты, 7 - все найденные варианты за неделю до указанных дат и неделю после.
  // Параметры ответа
  // prices — массив, полученных цен:
  //   value — стоимость перелета, в указанной валюте.
  // trip_class — класс перелёта (только 0 — Эконом).
  // show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // return_date — дата возвращения.
  // origin — список пунктов отправления, ближайших к указанному.
  // number_of_changes — количество пересадок.
  // gate — агентство, в котором был найден билет.
  // found_at — время и дата, когда был найден билет.
  // duration — продолжительность полета в минутах с учетом пересадок и ожидания.
  // distance — расстояние между пунктом вылета и назначения по карте.
  // destination — список пунктов назначения, ближайших к указанному.
  // depart_date — дата отправления.
  // actual — является ли предложение актуальным.
  // origins — массив пунктов отправления в ответе.
  // destinations — массив пунктов назначения в ответе.
  // errors — сообщение об ошибке. Если возвращается ошибка "Some error occured", значит по этому направлению нет данных в кэше.

  // Параметры ответа
  // prices — массив, полученных цен:
      // value — стоимость перелета, в указанной валюте.
      // trip_class — класс перелёта (только 0 — Эконом).
      // show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
      // return_date — дата возвращения.
      // origin — список пунктов отправления, ближайших к указанному.
      // number_of_changes — количество пересадок.
      // gate — агентство, в котором был найден билет.
      // found_at — время и дата, когда был найден билет.
      // duration — продолжительность полета в минутах с учетом пересадок и ожидания.
      // distance — расстояние между пунктом вылета и назначения по карте.
      // destination — список пунктов назначения, ближайших к указанному.
      // depart_date — дата отправления.
      // actual — является ли предложение актуальным.
  // origins — массив пунктов отправления в ответе.
  // destinations — массив пунктов назначения в ответе.
  // errors — сообщение об ошибке. Если возвращается ошибка "Some error occured", значит по этому направлению нет данных в кэше.

  // Возвращает самые дешевые билеты безпересадок, а также с 1 или 2 пересадками по выбранному маршруту с фильтрами.
  public static CheapTik = 'http://api.travelpayouts.com/v1/prices/cheap';

  // Параметры запроса
  // origin — IATA код города вылета. IATA код указывается буквами верхнего регистра, например MOW.
  // destination — IATA код города назначения (укажите "-" для любых направлений). IATA код указывается буквами верхнего регистра, например MOW.
  // depart_date (не обязательно) — месяц вылета (формат YYYY-MM).
  // return_date (не обязательно) — месяц возвращения (формат YYYY-MM).
  // token — индивидуальный токен доступа.
  // page — необязательный параметр, используется для отображения найденных данных (по умолчанию на странице отображается 100 найденных вариантов. Если не выбран destination, то данных может быть больше. В этом случае используйте page, для отображения следующего набора данных, например, page=2).
  // currency — Валюта цен на билеты. Значение по умолчанию — rub. Допустимые значения: [«USD», «EUR», «RUB»].
  // Параметры ответа
  // success — результат запроса.
  // data — полученные данные:
  //   0, 1, 2 — Порядковый номер в результатах выдачи.
  // price — Цена билета (в заданной валюте, параметр currency).
  // airline — IATA код авиакомпании, выполняющей перелет.
  // flight_number — Номер рейса.
  // departure_at — Дата вылета.
  // return_at — Дата возвращения.
  // expires_at — Дата истечения актуальности найденной цены (UTC+0).

  // Возвращает самый дешевый билет без пересадок для выбранного направления с фильтрами по датам вылета и возвращения.
  public static PriceTik = 'http://api.travelpayouts.com/v1/prices/direct';

  // Параметры запроса
  // origin — IATA код города вылета. IATA код указывается буквами верхнего регистра, например MOW.
  // destination — IATA код города назначения (укажите "-" для любых направлений). IATA код указывается буквами верхнего регистра, например MOW.
  // depart_date (не обязательно) — месяц вылета (YYYY-MM).
  // return_date (не обязательно) — месяц возвращения (YYYY-MM).
  // currency — Валюта ответа (USD, EUR, RUB). Значение по умолчанию — rub.
  // token — Индивидуальный токен доступа.
  // Параметры ответа
  // success — результат запроса.
  // data — полученные данные (в разрезе IATA кодов):
  // 0, 1, 2 — Порядковый номер в результатах выдачи.
  // price — Цена билета (в заданной валюте).
  // airline — IATA код авиакомпании, выполняющей перелет.
  // flight_number — Номер рейса.
  // departure_at — Дата вылета.
  // return_at — Дата возвращения.
  // expires_at — Дата истечения актуальности найденной цены (UTC+0).

  // Билеты из города на любое число месяца
  // Возвращает самый дешевый билет (без пересадки, с одной или двумя пересадками) для указанного направления для каждого дня выбранного месяца.
  public static DataMonth = 'http://api.travelpayouts.com/v1/prices/calendar';

  // origin — IATA код города вылета. IATA код указывается буквами верхнего регистра, например, MOW.
  // destination — IATA код города назначения. IATA код указывается буквами верхнего регистра, например, MOW.
  // depart_date — Месяц вылета (в формате YYYY-MM). По умолчанию передается текущий месяц. Если не передать параметр и до конца месяца меньше недели - будет использована дата следующего месяца в формате YYYY-MM. Если передать пустую строку, то будут выведены результаты на год вперёд.
  // return_date (опционально) — Месяц возвращения (в формате YYYY-MM). Если не передать параметр, но передать depart_date, то выведутся билеты на указанный там месяц. Если передать пустую строку в depart_date и передать return_date, то он выступит ограничителем даты и выведет билеты до конца месяца return_date с текущей даты.
  // calendar_type — поле, по которому будет строиться календарь. Одно из двух значений: departure_date или return_date.
  // trip_duration (опционально) — Длительность пребывания в городе назначения.
  // token — Индивидуальный токен доступа.
  // currency — Валюта ответа (USD, EUR, RUB). Значение по умолчанию — rub.

  // Параметры ответа
  // success — результат запроса.
  // data — полученные данные (в разрезе дат):
      // origin — IATA код города вылета.
      // destination — IATA код города назначения.
      // price — Цена билета в заданной валюте.
      // transfers — Количество пересадок.
      // airline — IATA код авиакомпании.
      // flight_number — Номер рейса.
      // departure_at — Дата вылета.
      // return_at — Дата возвращения.
      // expires_at — Срок истечения актуальности цены (UTC+0).
      // source — источник данных. Если не указано, значит данные подгружаются из нашей базы. Обратите внимание! Если данные отдаются от нашего партнера (например, skypicker), то в параметре origin и destination указывается IATA код аэропорта, а не города.

  // Возвращает направления, по которым авиакомпания осуществляет перелеты, отсортированные по популярности.
  public static Test = 'http://api.travelpayouts.com/v1/airline-directions';

  // Параметры запроса
  // airline_code — IATA код авиакомпании. IATA код указывается буквами верхнего регистра, например SU.
  // limit — Количество записей на странице. Значение по умолчанию — 30. Не более 1000.
  // token — Индивидуальный токен доступа.
  // Параметры ответа
  // success — результат запроса.
  // data — перечень популярных направлений авиакомпании с указанием популярности направления.
  // currency — Валюта ответа (USD, EUR, RUB). Никакого отношения к данным в ответе не имеет.

  // Возвращает цены на ближайшие к целевым датам
  public static Test1 = 'http://api.travelpayouts.com/v2/prices/week-matrix';

  // Параметры запроса
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // origin — пункт отправления. IATA код города. Значение по умолчанию — LED.
  // destination — пункт назначения. IATA код города. Значение по умолчанию — HKT.
  // show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // depart_date — вылет туда. Дата в формате 'YYYY-MM-DD'.
  // return_date — вылет обратно. Дата в формате 'YYYY-MM-DD'.
  // Параметры ответа
  // success — результат запроса.
  // data — полученные данные:
  //   show_to_affiliates — false — все цены, true — только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  //   origin — пункт отправления.
  //   destination — пункт назначения.
  //   trip_class — класс перелёта (только 0 — Эконом).
  //   depart_date — дата отправления.
  //   return_date — дата возвращения.
  //   number_of_changes — количество пересадок.
  //   value — стоимость перелета, в указанной валюте.
  //   found_at — время и дата, когда был найден билет.
  //   distance — расстояние между пунктом вылета и назначения.
  //   actual — является ли предложение актуальным.

  // Возвращает самые популярные направления из заданного города

  public static Popular = 'http://api.travelpayouts.com/v1/city-directions';

  //   Параметры запроса
  // origin — пункт отправления. IATA код города.
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // Параметры ответа
  // success — результат запроса.
  //   data — полученные данные (в разрезе дат):
  //   origin — пункт отправления.
  //   destination — пункт назначения.
  //   departure_at — дата и время отправления.
  //   return_at — дата и время возвращения.
  //   number_of_changes — количество пересадок.
  //   price — стоимость перелета, в указанной валюте.
  //   found_at — время и дата, когда был найден билет.
  //   transfers — количество пересадок.
  //   airline — IATA код авиакомпании.
  //   flight_number — номер рейса.
  //   currency — валюта ответа.

  // Данные города в формате JSON
  public static Cities = 'http://api.travelpayouts.com/data/ru/cities.json';

  // Параметры ответа
  // code — IATA-code страны.
  // name — Название страны.
  // currency — Валюта страны.
  // name_translations  — Название страны на других языках.

  // Список стран (неопязательный)
  // public static Countries = 'http://api.travelpayouts.com/data/ru/countries.json';

  // Данные об аэропортах в json формате
  public static Airports = 'http://api.travelpayouts.com/data/ru/airports.json';

  // Параметры ответа
  // code — iata-код.
  // name — название аэропорта (вокзала или автобусной станции).
  // coordinates — координаты.
  // time_zone — часовой пояс относительно гринвича.
  // name_translations — название на разных языках.
  // country_code — iata-код страны.
  // city_code — iata-код города.
  // flightable — является ли действующим аэропортом (true - является, false - нет).

  // Данные о маршрутах в json формате
  // Запрос возвращает файл со списком маршрутов из базы данных.

  public static Test3 = 'http://api.travelpayouts.com/data/routes.json';

  // Параметры ответа
  // airline_iata — IATA-код авиакомпании.
  // airline_icao — ICAO-код авиакомпании.
  // departure_airport_iata — IATA-код аэропорта отправления.
  // departure_airport_icao — ICAO-код аэропорта отправления.
  // arrival_airport_iata — IATA-код аэропорта прибытия.
  // arrival_airport_icao — ICAO-код аэропорта прибытия.
  // codeshare — показывает осуществляет ли рейс та же компания, что продает билет.
  // transfers — количество пересадок.
  // planes — IATA-код самол

  public static Special = 'http://api.travelpayouts.com/v2/prices/special-offers?token=49679098347c457387656573a8437d2d';

  // Определение местоположения пользователя по IP адресу
  // Описание
  //
  // Возвращает IATA-код и название ближайшего от пользователя города.
  //
  // Запрос
  //
  public static LocalCity = 'http://www.travelpayouts.com/whereami?locale=ru&callback=useriata&ip=62.105.128.0';
  //
  //   Параметры запроса
  //
  // locale — язык, на котором возвращается название города (доступны языки: en, ru, de, fr, it, pl, th. По умолчанию установлен русский);
  // callback — задает имя функции, в которой содержится ответ на запрос (обязательный параметр);
  // ip — ip-aдрес пользователя (если адрес не передается, система определяет ip из header запроса).
  // Пример ответа
  //
  // useriata({"iata":"MOW","name":"Москва"})
  // Параметры ответа
  //
  // iata — ИАТА-код города, в котором находится пользователь;
  // name — название города.
}

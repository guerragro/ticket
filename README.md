https://support.travelpayouts.com/hc/en-us/articles/203956163

Выполнено:
-создаются объекты и помещаются в массив

Надо сделать:
- обход CORS
- посмотреть proxy.conf.json и proxy.conf.js
- из базы городов, нужно находит страну и вытаскивать ее IATA-code и вставлять в массив
- при запросе, находить самый девешый авиабилет первой точки, затем самый дешевый до второй точки и так далее


  // Всякие мысли

  // будет отслеживать список билетов
  // будет менять отраженные данные по билетам
  // делаю запрос выводится список билетов

npm install --save rxjs-compat
npm install mobx для action, observable, computed
npm install rxjs
npm install ngx-mobx для fromMobx

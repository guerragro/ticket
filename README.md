https://support.travelpayouts.com/hc/en-us/articles/203956163

Выполнено:
-создаются объекты и помещаются в массив

Надо сделать:
- обход CORS
- посмотреть proxy.conf.json и proxy.conf.js
- из базы городов, нужно находит страну и вытаскивать ее IATA-code и вставлять в массив
- при запросе, находить самый девешый авиабилет первой точки, затем самый дешевый до второй точки и так далее

npm install --save rxjs-compat
npm install mobx для action, observable, computed
npm install rxjs
npm install ngx-mobx для fromMobx

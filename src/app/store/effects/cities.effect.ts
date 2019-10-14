import { Injectable } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromCitiesAction from '../actions/cities.action';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class CitiesEffect {
  constructor(
    public service: SearchService,
    public action$: Actions
  ) {}

  @Effect()
  loadCities = this.action$.pipe(
    ofType(fromCitiesAction.CITIES_ACTION.LOAD_CITIES),
    mergeMap(() => this.service.getDataCities().pipe(
      map(cities => new fromCitiesAction.LoadCitiesOk(cities))
    ))
  );
}

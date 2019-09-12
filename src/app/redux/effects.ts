import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { TicketService } from '../service/ticket.service';

@Injectable()

export class TicketEffects {

  constructor(
    public service: TicketService
  ) {}

  @Effect()
}

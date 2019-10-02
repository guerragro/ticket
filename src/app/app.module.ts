import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TicketService } from './service/ticket.service';
import { TicketComponent } from './ticket/ticket.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';

import { StoreModule } from '@ngrx/store';
import { ticketReducer } from './redux/ticket.reducer';
import { reducer } from './redux/app.state';
import {EffectsModule} from '@ngrx/effects';
import {TicketEffects} from './redux/effects';
import {MobxStore} from './mobx/mobxstore';

// import { TicketStore } from './mobx/TicketStore';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    SearchTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // регистрируем редакс и все редьюсеры
    // StoreModule.forRoot({Ticket: ticketReducer})
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([TicketEffects])
  ],
  providers: [
    TicketService,
    HttpClientModule,
    MobxStore
    // TicketStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

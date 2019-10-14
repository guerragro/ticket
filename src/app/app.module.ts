import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchService } from './service/search.service';
import { TicketComponent } from './ticket/ticket.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';

import { StoreModule } from '@ngrx/store';
import { ticketReducer } from './redux/ticket.reducer';
import { reducer } from './redux/app.state';
import { appReducers } from './store/reducers/app.reducer';
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
    // второй способ регистрацию редьюсера
    // StoreModule.forRoot(reducer),
    // Полностью переработаный store
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TicketEffects])
  ],
  providers: [
    SearchService,
    HttpClientModule,
    MobxStore
    // TicketStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

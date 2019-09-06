import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketService } from './service/ticket.service';
import { TicketStore } from './mobx/TicketStore';
import {ticketReducer} from './redux/ticket.reducer';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';


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
    StoreModule.forRoot({searchTicket: ticketReducer})
  ],
  providers: [
    TicketService,
    HttpClientModule,
    TicketStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

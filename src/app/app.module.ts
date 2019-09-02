import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketService } from './service/ticket.service';
import { ScannerStore } from './service/store';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TicketService,
    HttpClientModule,
    // регистрируем стор
    ScannerStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

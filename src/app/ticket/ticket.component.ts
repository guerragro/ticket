import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { TicketModel, TicketInterface } from '../model';

import { ScannerStore } from '../service/store';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // ЗДЕСЬ ДОЛЖНЫ БЫТЬ ТОЛЬКО ФУНКЦИИ
  origin: string;
  destination: string;
  departureDate: any;
  arrivalDate: any;
  id: number = 0;
  public ticketModel: TicketModel;
  arr: any;
  model: any[] = [];

  constructor(
    public ticketService: TicketService,
    public scannerStore: ScannerStore
  ) {
  }

  ngOnInit() {
    // получаем список городов
    this.ticketService.getDataCities().subscribe(
      res => this.find(res),
      err => console.log(err)
    );
    //
    this.ticketService.getPriceList().subscribe(
      (res: any) => console.log(res),
      err => console.log(err)
    );
  }

  find(ans) {
    // console.log(ans);
    // this.arr = ans;
    this.scannerStore.CitiesList(ans);
  }

  search(event) {
    if (this.origin == '' && this.destination == '' && this.departureDate == '' && this.arrivalDate == '') {
      return;
    } else {
      this.id++;
      // поиск кода города
      // this.origin = this.arr.filter(a => a.name === this.origin);
      // this.destination = this.arr.filter(a => a.name === this.destination);
      // console.log(this.origin, this.destination);
      // console.log(this.origin[0]['code'], this.destination['code']);
      // создаем новый объект в массиве
      // все запросы
      this.ticketModel = new TicketModel(this.origin[0]['code'], this.destination[0]['code'], this.departureDate, this.arrivalDate, this.id);
      console.log(typeof this.ticketModel);
      // this.ticketService.getDataMonth(this.ticketModel[0]).subscribe(
      //   res => console.log(res),
      //   err => console.log(err)
      // );
      // console.log(this.ticketModel[0]);
    }
    // добавляем в массив
    this.model.push(this.ticketModel);
    console.log(this.model);
  }
}

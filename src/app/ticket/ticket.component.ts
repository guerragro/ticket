import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { TicketModel, TicketInterface } from '../model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

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
  ) {
  }

  ngOnInit() {
    this.ticketService.getPriceList().subscribe(
      (res: any) => console.log(res),
      err => console.log(err)
    );
    // получаем список стран
    this.ticketService.getDataCountries().subscribe(
      res => this.find(res),
      err => console.log(err)
    );
    // получаем список городов
    this.ticketService.getDataCities().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    // this.ticketService.getCheapTik().subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // );
  }

  find(ans) {
    this.arr = JSON.stringify(ans);
    // console.log(this.arr);
  }

  search(event) {
    if (this.origin == '' && this.destination == '' && this.departureDate == '' && this.arrivalDate == '') {
      return;
    } else {
      this.id++;
      // создаем новый объект
      this.ticketModel = new TicketModel(this.origin, this.destination, this.departureDate, this.arrivalDate, this.id);
      console.log(this.ticketModel);
    }
    // добавляем в массив
    this.model.push(this.ticketModel);
    console.log(this.model);
  }
}

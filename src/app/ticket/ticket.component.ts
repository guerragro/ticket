import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // public ticket: object;
  county: any;
  arr: object;

  constructor(
    public ticketService: TicketService
  ) {
    this.arr = {
      origin: '',
      destination: '',
    };
  }

  ngOnInit() {
    this.ticketService.getPriceList().subscribe(
      (res: any) => console.log(res),
      err => console.log(err)
    );
    this.ticketService.getDataCounty().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.ticketService.getCheapTik().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  search(event) {
    console.log(typeof event);
    console.log(event);
    console.log(this.arr);
  }
}

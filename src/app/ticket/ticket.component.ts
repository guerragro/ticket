import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public ticket: object;
  county: any;

  constructor(
    public ticketService: TicketService
  ) {
  }

  ngOnInit() {
    this.ticketService.getTicket().subscribe(
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

  check() {
    console.log('work');
  }
}

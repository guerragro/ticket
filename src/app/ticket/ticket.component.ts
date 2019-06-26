import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public ticket: object;

  constructor(
    public ticketService: TicketService
  ) {
  }

  ngOnInit() {
    this.ticketService.getTicket().subscribe(
      (res: any) => {
        this.ticket = res.data;
        console.log(this.ticket);
      },
      err => console.log(err)
    );
  }

  check() {
    console.log('work');
  }
}

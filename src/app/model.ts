export class TicketModel {

  // то как будет выглядит наш объект
  constructor(
    public origin: string,
    public destination: string,
    public depart_date: string,
    public return_date: string,
    public id?: number,
  ) {}
}

export class CitiesModel {
  code: string;
  name: string;
  currency: string;
  name_transparante: Object;
}

export interface TicketInterface {
  model: TicketModel[];
}

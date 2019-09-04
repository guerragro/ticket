export class TicketModel {

  // то как будет выглядит наш объект
  constructor(
    public origin: string,
    public destination: string,
    public depart_date: number,
    public return_date: number,
    public id?: number,
  ) {}
}

export class CitiesModel {
  constructor(
    public name: string,
    public age: number
  ) {}
}

export interface TicketInterface {
  // здесь мы говорим, что это будет массив с объектами
  model: TicketModel[];
}

// export interface ShipmentPalletInterface {
//   pallet?: string;
//   pallets: string[];
// }
//
// export class ShipmentPalletModel implements ShipmentPalletInterface {
//   pallet: string;
//   pallets: string[];
//
//   constructor(pallet = null, pallets = []) {
//     this.construct({pallet, pallets});
//   }
//
//   construct(model: {pallet: string, pallets: string[]}): void {
//     this.pallet = model.pallet;
//     this.pallets = model.pallets;
//   }
// }

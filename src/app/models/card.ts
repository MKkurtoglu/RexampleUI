export interface Card {
   
    cardNumber: string;
    cardholderName: string;
    expirationMonth: number;
    expirationYear: number;
    cvvCvc: number;
    type: CardType;
  }
  export enum CardType {
    Visa = 0,
    MasterCard = 1,
    Amex = 2
  }
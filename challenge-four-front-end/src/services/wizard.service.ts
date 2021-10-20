import { IShippingSender, IShippingReceiver, IShippingWeight, IShippingShippingOption } from 'src/interfaces/i.shipping-label-steps';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  public sender: IShippingSender;
  public receiver: IShippingReceiver;
  public weight: IShippingWeight;
  public shippingOption: IShippingShippingOption;

  constructor() { }

  setSender(dataInformation: IShippingSender) {
    this.sender = { ...dataInformation };
  }
  getSender() {
    return this.sender;
  }

  setReceiver(dataInformation: IShippingReceiver) {
    this.receiver = { ...dataInformation };
  }
  getReceiver() {
    return this.receiver;
  }

  setWeight(dataInformation: IShippingWeight) {
    this.weight = dataInformation;
  }
  getWeight(): any {
    return this.weight;
  }

  setShippingOption(dataInformation: IShippingShippingOption) {
    this.shippingOption = dataInformation;
  }
  getShippingOption(): any {
    return this.shippingOption;
  }

  getFinalResult(): object {
    return {
      from: {
        name: this.getSender().name,
        street: this.getSender().street,
        city: this.getSender().city,
        state: this.getSender().state,
        zip: this.getSender().zip
      },
      to: {
        name: this.getReceiver().name,
        street: this.getReceiver().street,
        city: this.getReceiver().city,
        state: this.getReceiver().state,
        zip: this.getReceiver().zip
      },
      weight: this.getWeight(),
      shippingOption: this.getShippingOption(),
      shippingCost: this.shippingCost()
    }
  }

  shippingCost() {
    const shippingRate = 0.40;
    return this.getWeight() * shippingRate * (this.getShippingOption() === this.getShippingOption().ground ? 1 : 1.5);
  }

  createAction(): Object {
    let newDialog;
    return Object.assign({}, newDialog);
  }
}

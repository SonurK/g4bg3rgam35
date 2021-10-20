import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardService } from '../../../../services/wizard.service';
import { ShippingSenderAddressComponent } from '../shipping-sender-address/shipping-sender-address.component';
import { ShippingReceiverAddressComponent } from '../shipping-receiver-address/shipping-receiver-address.component';
import { ShippingWeightComponent } from '../shipping-weight/shipping-weight.component';
import { ShippingOptionComponent } from '../shipping-option/shipping-option.component';
import { WizardAction } from '../../../../interfaces/i.shipping-label-steps';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.scss']
})
export class ShippingLabelMakerComponent implements OnInit {

  @ViewChild(ShippingSenderAddressComponent, { static: false }) private shippingSenderChild: ShippingSenderAddressComponent;
  @ViewChild(ShippingReceiverAddressComponent, { static: false }) private shippingRecieverChild: ShippingReceiverAddressComponent;
  @ViewChild(ShippingWeightComponent, { static: false }) private weightChild: ShippingWeightComponent;
  @ViewChild(ShippingOptionComponent, { static: false }) private optionChild: ShippingOptionComponent;

  public currentStep: number;
  public wizardButtonAction;
  public objectResult: object;
  public loggedUser: string;

  constructor(
    public route: ActivatedRoute,
    public wizard: WizardService,
    public authenticationService: AuthenticationService,
  ) {
    this.wizardButtonAction = WizardAction
    this.currentStep = 0;
  }

  ngOnInit() {
    this.loggedUser = this.route.snapshot.paramMap.get('name');
  }

  logout() {
    this.authenticationService.deleteUser();
  }

  testUser(){
    this.authenticationService.getUser();
  }

  registerAction(action) {
    switch (action) {
      case WizardAction.Next:
        this.nextAction();
        break;
      case WizardAction.Prev:
        this.previousAction();
        break;
      case WizardAction.End:
        this.complete();
        break;
      default:
        break;
    }
  }

  complete() {
    this.currentStep = 0;
  }

  previousAction() {
    this.currentStep <= 0 ? this.currentStep : this.currentStep--;
  }

  nextAction() {
    switch (this.currentStep) {
      case 0:
        if (this.validateComponentResponse(this.shippingSenderChild.getComponentState())) {
          this.wizard.setSender(this.shippingSenderChild.getComponentState().form);
        }
        break;

      case 1:
        if (this.validateComponentResponse(this.shippingRecieverChild.getComponentState())) {
          this.wizard.setReceiver(this.shippingRecieverChild.getComponentState().form);
        }
        break;

      case 2:
        if (this.validateComponentResponse(this.weightChild.getComponentState())) {
          this.wizard.setWeight(this.weightChild.getComponentState().form);
        }
        break;

      case 3:
        if (this.validateComponentResponse(this.optionChild.getComponentState())) {
          this.wizard.setShippingOption(this.optionChild.getComponentState().form);
        }
        this.objectResult = this.wizard.getFinalResult();
        break;
      default:
        break;
    }

  }

  validateComponentResponse(objectFromComponent) {
    if (objectFromComponent.valid) {
      this.currentStep >= 4 ? this.currentStep : this.currentStep++;
      return true;
    } else {
      return false;
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingLabelComponent } from './shipping-label/shipping-label.component';
import { ShippingSenderAddressComponent } from './shipping-sender-address/shipping-sender-address.component';
import { ShippingReceiverAddressComponent } from './shipping-receiver-address/shipping-receiver-address.component';
import { ShippingWeightComponent } from './shipping-weight/shipping-weight.component';
import { ShippingOptionComponent } from './shipping-option/shipping-option.component';
import { ShippingLabelMakerComponent } from './shipping-label-maker/shipping-label-maker.component';

import { SharedModule } from '../../../modules/shared/shared.module';


@NgModule({
  /* Lazy Loading Modules */
  declarations: [
    ShippingLabelComponent,
    ShippingSenderAddressComponent,
    ShippingReceiverAddressComponent,
    ShippingWeightComponent,
    ShippingOptionComponent,
    ShippingLabelMakerComponent,

  ],
  imports: [
    SharedModule,

    CommonModule,
    ShippingRoutingModule,
  ]
})
export class ShippingModule { }

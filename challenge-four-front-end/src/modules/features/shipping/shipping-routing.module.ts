import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingLabelMakerComponent } from './shipping-label-maker/shipping-label-maker.component';


const routes: Routes = [
  {
    path: 'shipping-label-maker/:name',
    component: ShippingLabelMakerComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule { }

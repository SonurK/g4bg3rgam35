import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingButtonComponent } from './shipping-button/shipping-button.component';
import { ShippingHeaderComponent } from './shipping-header/shipping-header.component';
import { ShippingSelectComponent } from './shipping-select/shipping-select.component';

import { GeneralCtaComponent } from './general-cta/general-cta.component';
import { GeneralInputComponent } from './general-input/general-input.component';
import { GeneralItemBoxComponent } from './general-item-box/general-item-box.component';
import { GeneralProfileComponent } from './general-profile/general-profile.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,

    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    CdkTableModule,
    MatDatepickerModule,
    MatNativeDateModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ShippingButtonComponent,
    ShippingHeaderComponent,
    ShippingSelectComponent,

    GeneralCtaComponent,
    GeneralInputComponent,
    GeneralItemBoxComponent,
    GeneralProfileComponent,
    GlobalHeaderComponent,

  ],
  exports: [
    ShippingButtonComponent,
    ShippingHeaderComponent,
    ShippingSelectComponent,

    GeneralCtaComponent,
    GeneralInputComponent,
    GeneralItemBoxComponent,
    GeneralProfileComponent,
    GlobalHeaderComponent,

    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    CdkTableModule,
    MatDatepickerModule,
    MatNativeDateModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }

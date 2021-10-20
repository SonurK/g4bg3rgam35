import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { ShippingLabelMakerComponent } from './shipping-label-maker.component';
import { ShippingHeaderComponent } from '../../../shared/shipping-header/shipping-header.component';
import { ShippingButtonComponent } from '../../../shared/shipping-button/shipping-button.component';
import { ShippingSenderAddressComponent } from '../shipping-sender-address/shipping-sender-address.component';
import { ShippingReceiverAddressComponent } from '../shipping-receiver-address/shipping-receiver-address.component';
import { ShippingWeightComponent } from '../shipping-weight/shipping-weight.component';
import { ShippingOptionComponent } from '../shipping-option/shipping-option.component';
import { ShippingLabelComponent } from '../shipping-label/shipping-label.component';

describe('ShippingLabelMakerComponent', () => {
  let component: ShippingLabelMakerComponent;
  let fixture: ComponentFixture<ShippingLabelMakerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ShippingLabelMakerComponent,
        ShippingHeaderComponent,
        ShippingSenderAddressComponent,
        ShippingReceiverAddressComponent,
        ShippingWeightComponent,
        ShippingOptionComponent,
        ShippingLabelComponent,
        ShippingButtonComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingLabelMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the function', () => {
    let result = component.registerAction("2");
    expect(result).toBeUndefined();
  });

});

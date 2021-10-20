import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShippingButtonComponent } from './shipping-button.component';

describe('ShippingButtonComponent', () => {
  let component: ShippingButtonComponent;
  let fixture: ComponentFixture<ShippingButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

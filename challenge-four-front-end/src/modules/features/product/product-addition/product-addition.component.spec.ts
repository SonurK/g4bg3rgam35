import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductAdditionComponent } from './product-addition.component';

describe('ProductAdditionComponent', () => {
  let component: ProductAdditionComponent;
  let fixture: ComponentFixture<ProductAdditionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

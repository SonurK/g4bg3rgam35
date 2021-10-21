import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralItemBoxComponent } from './general-item-box.component';

describe('GeneralItemBoxComponent', () => {
  let component: GeneralItemBoxComponent;
  let fixture: ComponentFixture<GeneralItemBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralItemBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

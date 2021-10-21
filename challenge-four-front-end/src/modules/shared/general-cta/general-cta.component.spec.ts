import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCtaComponent } from './general-cta.component';

describe('GeneralCtaComponent', () => {
  let component: GeneralCtaComponent;
  let fixture: ComponentFixture<GeneralCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

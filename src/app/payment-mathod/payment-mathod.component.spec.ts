import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMathodComponent } from './payment-mathod.component';

describe('PaymentMathodComponent', () => {
  let component: PaymentMathodComponent;
  let fixture: ComponentFixture<PaymentMathodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMathodComponent]
    });
    fixture = TestBed.createComponent(PaymentMathodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

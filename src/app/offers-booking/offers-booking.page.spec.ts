import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffersBookingPage } from './offers-booking.page';

describe('OffersBookingPage', () => {
  let component: OffersBookingPage;
  let fixture: ComponentFixture<OffersBookingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OffersBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

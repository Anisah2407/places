import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffersDetailPage } from './offers-detail.page';

describe('OffersDetailPage', () => {
  let component: OffersDetailPage;
  let fixture: ComponentFixture<OffersDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OffersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

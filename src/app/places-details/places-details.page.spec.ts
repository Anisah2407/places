import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesDetailsPage } from './places-details.page';

describe('PlacesDetailsPage', () => {
  let component: PlacesDetailsPage;
  let fixture: ComponentFixture<PlacesDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlacesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

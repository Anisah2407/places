import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'places',
    loadChildren: () =>
      import('./places/places.module').then((m) => m.PlacesPageModule),
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'places',
    loadChildren: () =>
      import('./places/places.module').then((m) => m.PlacesPageModule),
  },
  {
    path: 'places-details',
    loadChildren: () =>
      import('./places-details/places-details.module').then(
        (m) => m.PlacesDetailsPageModule
      ),
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersPageModule),
  },
  {
    path: 'offers-detail',
    loadChildren: () =>
      import('./offers-detail/offers-detail.module').then(
        (m) => m.OffersDetailPageModule
      ),
  },
  {
    path: 'offers-booking',
    loadChildren: () =>
      import('./offers-booking/offers-booking.module').then(
        (m) => m.OffersBookingPageModule
      ),
  },
  {
    path: 'new-offers',
    loadChildren: () =>
      import('./new-offers/new-offers.module').then(
        (m) => m.NewOffersPageModule
      ),
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./bookings/bookings.module').then((m) => m.BookingsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

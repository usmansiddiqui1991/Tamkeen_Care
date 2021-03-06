import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sc-select-service', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'sc-welcome',
    loadChildren: () => import('./sc-welcome/sc-welcome.module').then( m => m.ScWelcomePageModule)
  },
  {
    path: 'sc-sliders',
    loadChildren: () => import('./sc-sliders/sc-sliders.module').then( m => m.ScSlidersPageModule)
  },
  {
    path: 'sc-otp',
    loadChildren: () => import('./sc-otp/sc-otp.module').then( m => m.ScOtpPageModule)
  },
  {
    path: 'sc-otp-code',
    loadChildren: () => import('./sc-otp-code/sc-otp-code.module').then( m => m.ScOtpCodePageModule)
  },
  {
    path: 'sc-dashboard',
    loadChildren: () => import('./sc-dashboard/sc-dashboard.module').then( m => m.ScDashboardPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'sc-select-service',
    loadChildren: () => import('./sc-select-service/sc-select-service.module').then( m => m.ScSelectServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

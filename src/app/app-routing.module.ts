import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

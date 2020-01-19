import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FawadPage } from './fawad.page';

const routes: Routes = [
  {
    path: '',
    component: FawadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FawadPageRoutingModule {}

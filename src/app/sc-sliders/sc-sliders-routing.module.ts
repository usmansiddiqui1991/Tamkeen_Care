import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScSlidersPage } from './sc-sliders.page';

const routes: Routes = [
  {
    path: '',
    component: ScSlidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScSlidersPageRoutingModule {}

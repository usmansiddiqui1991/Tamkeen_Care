import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScSelectServicePage } from './sc-select-service.page';

const routes: Routes = [
  {
    path: '',
    component: ScSelectServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScSelectServicePageRoutingModule {}

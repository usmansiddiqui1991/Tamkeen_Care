import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScDashboardPage } from './sc-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ScDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScDashboardPageRoutingModule {}

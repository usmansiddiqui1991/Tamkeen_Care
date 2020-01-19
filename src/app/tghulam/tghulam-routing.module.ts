import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TghulamPage } from './tghulam.page';

const routes: Routes = [
  {
    path: '',
    component: TghulamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TghulamPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T.GhulamPage } from './t.ghulam.page';

const routes: Routes = [
  {
    path: '',
    component: T.GhulamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T.GhulamPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScWelcomePage } from './sc-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: ScWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScWelcomePageRoutingModule {}

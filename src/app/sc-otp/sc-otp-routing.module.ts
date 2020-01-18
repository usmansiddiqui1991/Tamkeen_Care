import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScOtpPage } from './sc-otp.page';

const routes: Routes = [
  {
    path: '',
    component: ScOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScOtpPageRoutingModule {}

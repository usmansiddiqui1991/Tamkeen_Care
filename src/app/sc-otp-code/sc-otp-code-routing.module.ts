import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScOtpCodePage } from './sc-otp-code.page';

const routes: Routes = [
  {
    path: '',
    component: ScOtpCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScOtpCodePageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScOtpCodePageRoutingModule } from './sc-otp-code-routing.module';

import { ScOtpCodePage } from './sc-otp-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScOtpCodePageRoutingModule
  ],
  declarations: [ScOtpCodePage]
})
export class ScOtpCodePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScOtpPageRoutingModule } from './sc-otp-routing.module';

import { ScOtpPage } from './sc-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScOtpPageRoutingModule
  ],
  declarations: [ScOtpPage]
})
export class ScOtpPageModule {}

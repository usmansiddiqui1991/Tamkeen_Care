import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TghulamPageRoutingModule } from './tghulam-routing.module';

import { TghulamPage } from './tghulam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TghulamPageRoutingModule
  ],
  declarations: [TghulamPage]
})
export class TghulamPageModule {}

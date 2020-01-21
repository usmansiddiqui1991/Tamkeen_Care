import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScSelectServicePageRoutingModule } from './sc-select-service-routing.module';

import { ScSelectServicePage } from './sc-select-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScSelectServicePageRoutingModule
  ],
  declarations: [ScSelectServicePage]
})
export class ScSelectServicePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScSlidersPageRoutingModule } from './sc-sliders-routing.module';

import { ScSlidersPage } from './sc-sliders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScSlidersPageRoutingModule
  ],
  declarations: [ScSlidersPage]
})
export class ScSlidersPageModule {}

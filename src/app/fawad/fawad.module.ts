import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FawadPageRoutingModule } from './fawad-routing.module';

import { FawadPage } from './fawad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FawadPageRoutingModule
  ],
  declarations: [FawadPage]
})
export class FawadPageModule {}

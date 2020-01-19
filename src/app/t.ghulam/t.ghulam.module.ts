import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T.GhulamPageRoutingModule } from './t.ghulam-routing.module';

import { T.GhulamPage } from './t.ghulam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T.GhulamPageRoutingModule
  ],
  declarations: [T.GhulamPage]
})
export class T.GhulamPageModule {}

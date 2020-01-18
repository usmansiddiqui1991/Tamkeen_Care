import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScWelcomePageRoutingModule } from './sc-welcome-routing.module';

import { ScWelcomePage } from './sc-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScWelcomePageRoutingModule
  ],
  declarations: [ScWelcomePage]
})
export class ScWelcomePageModule {}

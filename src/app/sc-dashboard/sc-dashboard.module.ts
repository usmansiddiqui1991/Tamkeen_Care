import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScDashboardPageRoutingModule } from './sc-dashboard-routing.module';

import { ScDashboardPage } from './sc-dashboard.page';

import { Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScDashboardPageRoutingModule
  ],
  declarations: [ScDashboardPage]
})
export class ScDashboardPageModule {}


import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { AutoListComponent } from './auto-list/auto-list.component';


@NgModule({
  declarations: [ManageComponent, AutoListComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule
  ]
})
export class ManageModule { }

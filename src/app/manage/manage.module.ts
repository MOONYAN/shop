import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { AutoFormComponent } from './auto-form/auto-form.component';


@NgModule({
  declarations: [ManageComponent, AutoListComponent, AutoFormComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ManageModule { }

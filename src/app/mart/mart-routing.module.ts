import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MartComponent } from './mart.component';

const routes: Routes = [{ path: '', component: MartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MartRoutingModule { }

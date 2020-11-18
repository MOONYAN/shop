import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

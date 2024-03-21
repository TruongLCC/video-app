import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'system',
    loadChildren: ()=>import('./modules/system/system.module').then(m=> m.SystemModule),
    // data: {preload: true},
    // canActivate: [AuthGuard, RegisterGuard, CompleteRegisterGuard, RegisterGuard]
  },
  {
    path: '',redirectTo: 'system', pathMatch: 'full'
  },
  {path: '**', redirectTo: 'system', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

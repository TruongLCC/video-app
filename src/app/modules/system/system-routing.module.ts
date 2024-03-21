import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent,
        // data: {preload: true},
        // canActivate: [AuthGuard, RegisterGuard, CompleteRegisterGuard, RegisterGuard]
      },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
    // data: {preload: true},
    // canActivate: [AuthGuard, RegisterGuard, CompleteRegisterGuard, RegisterGuard, PermissionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule{}

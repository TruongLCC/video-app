import { NgModule } from '@angular/core';
import { SystemComponent } from './system.component';
import { HomeComponent } from './home/home.component';
import { SystemRoutingModule } from './system-routing.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
  ],
  imports: [
    SystemRoutingModule,
    LayoutModule
  ],
  providers: [],
})
export class SystemModule { }

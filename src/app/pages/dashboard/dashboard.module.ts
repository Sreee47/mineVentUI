import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StopedetailsComponent } from './stopedetails/stopedetails.component';
import { StopetwoComponent } from './stopetwo/stopetwo.component';
import { StoperthreeComponent } from './stoperthree/stoperthree.component';
import { StopefourComponent } from './stopefour/stopefour.component';
import { StopefiveComponent } from './stopefive/stopefive.component';
import { StopesixComponent } from './stopesix/stopesix.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    StopedetailsComponent,
    StopetwoComponent,
    StoperthreeComponent,
    StopefourComponent,
    StopefiveComponent,
    StopesixComponent,
  ],
})
export class DashboardModule { }

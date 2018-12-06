import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StopedetailsComponent } from './dashboard/stopedetails/stopedetails.component';
import { StopetwoComponent } from './dashboard/stopetwo/stopetwo.component';
import{StoperthreeComponent} from './dashboard/stoperthree/stoperthree.component';
import{StopefourComponent} from './dashboard/stopefour/stopefour.component';
import{StopefiveComponent} from './dashboard/stopefive/stopefive.component';
import{StopesixComponent} from './dashboard/stopesix/stopesix.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'dashboard/stopedetails',
      component: StopedetailsComponent,
    },
    {
      path: 'dashboard/stopetwo',
      component: StopetwoComponent,
    },
    {
      path: 'dashboard/stoperthree',
      component: StoperthreeComponent,
    },
    {
      path: 'dashboard/stopefour',
      component: StopefourComponent,
    },
    {
      path: 'dashboard/stopefive',
      component: StopefiveComponent,
    },
      {
      path: 'dashboard/stopesix',
      component: StopesixComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

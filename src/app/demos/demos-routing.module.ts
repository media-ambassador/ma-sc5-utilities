import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaSc5BaseLayoutModule, MaSc5BaseLayout } from '../lib/modules/base-layout';
import { HomeComponent } from './home/home.component';
import { DemosBaseLayoutResolve } from './demos-base-layout.resolve';

const routes: Routes = [
  { path: '', component: MaSc5BaseLayout, resolve: { identity: DemosBaseLayoutResolve },
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

export const RoutableModules = [
  MaSc5BaseLayoutModule
];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'm2c1'
  },
  {
    path: 'm2c1',
    component: Component1Component
  },
  {
    path: 'm2c2',
    component: Component2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }

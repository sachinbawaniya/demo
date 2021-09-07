import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SailingComponent } from './sailing/sailing.component';


const routes: Routes = [
  {
    path: '',
    component: SailingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SailingRoutingModule { }

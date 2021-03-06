import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAreaComponent } from './main-area.component';

const routes: Routes = [
  { path: '', component: MainAreaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAreaRoutingModule { }

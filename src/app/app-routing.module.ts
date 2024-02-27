import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BxChartComponentComponent } from './bx-components/bx-chart-component/bx-chart-component.component';

const routes: Routes = [

  {path: "", component: BxChartComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

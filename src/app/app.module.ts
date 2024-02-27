import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BxBarGraphComponent } from './bx-widgets/bx-organism/bx-bar-graph/bx-bar-graph.component';
import { BxLegendsComponent } from './bx-widgets/bx-atom/bx-legends/bx-legends.component';
import { BxChartComponentComponent } from './bx-components/bx-chart-component/bx-chart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BxBarGraphComponent,
    BxLegendsComponent,
    BxChartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

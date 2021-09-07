import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SailingComponent } from './modules/sailing/sailing/sailing.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { EnvironmentSpecificResolver } from './modules/shared/helper/environment-specific.resolver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    EnvironmentSpecificResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

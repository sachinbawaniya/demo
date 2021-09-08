import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { EnvironmentSpecificResolver } from './modules/shared/helper/environment-specific.resolver';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './modules/shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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

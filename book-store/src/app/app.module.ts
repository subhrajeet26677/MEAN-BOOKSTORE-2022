// import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  //imports module it depends on
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [],
  //entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
//i have to delete the component and make a new one
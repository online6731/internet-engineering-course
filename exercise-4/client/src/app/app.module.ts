import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovingButtonComponent } from './moving-button/moving-button.component';
import { PerfectNumberComponent } from './perfect-number/perfect-number.component';
import { LoginValidationComponent } from './login-validation/login-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    MovingButtonComponent,
    PerfectNumberComponent,
    LoginValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

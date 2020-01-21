import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

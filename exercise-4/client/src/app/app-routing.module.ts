import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovingButtonComponent } from './moving-button/moving-button.component'
import { PerfectNumberComponent } from './perfect-number/perfect-number.component';
import { LoginValidationComponent } from './login-validation/login-validation.component';

const routes: Routes = [
  { path: '', component: MovingButtonComponent },
  { path: 'perfect-number', component: PerfectNumberComponent },
  { path: 'login-validation', component: LoginValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-validation',
  templateUrl: './login-validation.component.html',
  styleUrls: ['./login-validation.component.styl']
})
export class LoginValidationComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(username, password) {
    this.loginService.login(username, password).subscribe((body) => {

    });
  }
}

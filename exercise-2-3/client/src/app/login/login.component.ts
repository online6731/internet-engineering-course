import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  response = '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }
  login(username, password) {
    this.loginService.login(this.username, this.password).subscribe(body => {
      this.response = body.data;
    });
  }
}

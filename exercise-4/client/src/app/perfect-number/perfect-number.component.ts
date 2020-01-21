import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfect-number',
  templateUrl: './perfect-number.component.html',
  styleUrls: ['./perfect-number.component.styl']
})
export class PerfectNumberComponent implements OnInit {

  numbers = [];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  generateNumbers() {
    this.numbers = Array.apply(null, { length: 10 }).map(() => Math.floor(Math.random() * 10) + 1, Number)
  }

  isPerfect(number) {
    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
      if (number % i == 0) {
        sumOfDivisors += i;
      }
    }

    return number === sumOfDivisors;
  }

  gotoLoginPage(number) {
    if (this.isPerfect(number)) {
      this.router.navigate(['/login-validation']);
    }
  }

}

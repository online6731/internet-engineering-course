import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moving-button',
  templateUrl: './moving-button.component.html',
  styleUrls: ['./moving-button.component.styl']
})
export class MovingButtonComponent implements OnInit {

  @ViewChild('magicButton', { static: false }) magicButton: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveButton() {
    this.magicButton.nativeElement.style.top = Math.floor(Math.random() * 300) + 'px';
    this.magicButton.nativeElement.style.left = Math.floor(Math.random() * 300) + 'px';
  }

  gotoPerfectPage() {
    this.router.navigate(['/perfect-number']);
  }
}

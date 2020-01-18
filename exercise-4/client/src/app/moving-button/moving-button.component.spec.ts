import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingButtonComponent } from './moving-button.component';

describe('MovingButtonComponent', () => {
  let component: MovingButtonComponent;
  let fixture: ComponentFixture<MovingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

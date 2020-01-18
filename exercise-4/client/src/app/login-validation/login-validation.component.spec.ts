import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginValidationComponent } from './login-validation.component';

describe('LoginValidationComponent', () => {
  let component: LoginValidationComponent;
  let fixture: ComponentFixture<LoginValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

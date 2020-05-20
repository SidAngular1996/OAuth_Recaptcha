import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCaptchaComponent } from './generate-captcha.component';

describe('GenerateCaptchaComponent', () => {
  let component: GenerateCaptchaComponent;
  let fixture: ComponentFixture<GenerateCaptchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateCaptchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

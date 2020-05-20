import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaTwoComponent } from './captcha-two.component';

describe('CaptchaTwoComponent', () => {
  let component: CaptchaTwoComponent;
  let fixture: ComponentFixture<CaptchaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptchaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptchaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

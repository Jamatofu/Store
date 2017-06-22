import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauCookieComponent } from './bandeau-cookie.component';

describe('BandeauCookieComponent', () => {
  let component: BandeauCookieComponent;
  let fixture: ComponentFixture<BandeauCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeauCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

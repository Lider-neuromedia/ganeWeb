import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaCaliComponent } from './america-cali.component';

describe('AmericaCaliComponent', () => {
  let component: AmericaCaliComponent;
  let fixture: ComponentFixture<AmericaCaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaCaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaCaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetplayComponent } from './betplay.component';

describe('BetplayComponent', () => {
  let component: BetplayComponent;
  let fixture: ComponentFixture<BetplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

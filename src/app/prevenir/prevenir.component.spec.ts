import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevenirComponent } from './prevenir.component';

describe('PrevenirComponent', () => {
  let component: PrevenirComponent;
  let fixture: ComponentFixture<PrevenirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevenirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatugiroComponent } from './calculatugiro.component';

describe('CalculatugiroComponent', () => {
  let component: CalculatugiroComponent;
  let fixture: ComponentFixture<CalculatugiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatugiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatugiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaInternaComponent } from './campana-interna.component';

describe('CampanaInternaComponent', () => {
  let component: CampanaInternaComponent;
  let fixture: ComponentFixture<CampanaInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanaInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidarteComponent } from './cuidarte.component';

describe('CuidarteComponent', () => {
  let component: CuidarteComponent;
  let fixture: ComponentFixture<CuidarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

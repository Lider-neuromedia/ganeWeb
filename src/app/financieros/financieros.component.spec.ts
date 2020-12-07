import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierosComponent } from './financieros.component';

describe('FinancierosComponent', () => {
  let component: FinancierosComponent;
  let fixture: ComponentFixture<FinancierosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancierosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

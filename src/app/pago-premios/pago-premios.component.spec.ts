import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPremiosComponent } from './pago-premios.component';

describe('PagoPremiosComponent', () => {
  let component: PagoPremiosComponent;
  let fixture: ComponentFixture<PagoPremiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoPremiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

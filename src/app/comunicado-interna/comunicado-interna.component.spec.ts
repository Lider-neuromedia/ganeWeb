import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicadoInternaComponent } from './comunicado-interna.component';

describe('ComunicadoInternaComponent', () => {
  let component: ComunicadoInternaComponent;
  let fixture: ComponentFixture<ComunicadoInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadoInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicadoInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

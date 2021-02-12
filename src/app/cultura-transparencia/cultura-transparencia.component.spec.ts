import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaTransparenciaComponent } from './cultura-transparencia.component';

describe('CulturaTransparenciaComponent', () => {
  let component: CulturaTransparenciaComponent;
  let fixture: ComponentFixture<CulturaTransparenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaTransparenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaTransparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

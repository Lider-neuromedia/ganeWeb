import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaAntilavadoComponent } from './cultura-antilavado.component';

describe('CulturaAntilavadoComponent', () => {
  let component: CulturaAntilavadoComponent;
  let fixture: ComponentFixture<CulturaAntilavadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaAntilavadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaAntilavadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

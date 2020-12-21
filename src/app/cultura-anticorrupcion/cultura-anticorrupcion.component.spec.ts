import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaAnticorrupcionComponent } from './cultura-anticorrupcion.component';

describe('CulturaAnticorrupcionComponent', () => {
  let component: CulturaAnticorrupcionComponent;
  let fixture: ComponentFixture<CulturaAnticorrupcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaAnticorrupcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaAnticorrupcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

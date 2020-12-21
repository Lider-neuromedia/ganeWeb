import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasFeganeComponent } from './politicas-fegane.component';

describe('PoliticasFeganeComponent', () => {
  let component: PoliticasFeganeComponent;
  let fixture: ComponentFixture<PoliticasFeganeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasFeganeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasFeganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

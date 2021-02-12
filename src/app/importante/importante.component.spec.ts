import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanteComponent } from './importante.component';

describe('ImportanteComponent', () => {
  let component: ImportanteComponent;
  let fixture: ComponentFixture<ImportanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

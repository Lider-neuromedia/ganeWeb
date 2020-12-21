import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionSocialComponent } from './fundacion-social.component';

describe('FundacionSocialComponent', () => {
  let component: FundacionSocialComponent;
  let fixture: ComponentFixture<FundacionSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundacionSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundacionSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

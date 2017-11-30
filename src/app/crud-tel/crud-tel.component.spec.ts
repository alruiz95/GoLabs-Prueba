import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTelComponent } from './crud-tel.component';

describe('CrudTelComponent', () => {
  let component: CrudTelComponent;
  let fixture: ComponentFixture<CrudTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

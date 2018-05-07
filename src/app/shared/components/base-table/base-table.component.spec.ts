import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSc5BaseTableComponent } from './base-table.component';

describe('BaseTableComponent', () => {
  let component: MaSc5BaseTableComponent<any>;
  let fixture: ComponentFixture<MaSc5BaseTableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSc5BaseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSc5BaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

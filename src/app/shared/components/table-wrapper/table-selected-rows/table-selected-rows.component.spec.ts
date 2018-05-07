import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSc5TableSelectedRowsComponent } from './table-selected-rows.component';

describe('TableSelectedRowsComponent', () => {
  let component: MaSc5TableSelectedRowsComponent;
  let fixture: ComponentFixture<MaSc5TableSelectedRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSc5TableSelectedRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSc5TableSelectedRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

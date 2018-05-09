import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSc5TableWrapperComponent } from './table-wrapper.component';

describe('TableWrapperComponent', () => {
  let component: MaSc5TableWrapperComponent<any>;
  let fixture: ComponentFixture<MaSc5TableWrapperComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSc5TableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSc5TableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSc5BaseLayout } from './base.layout';

describe('BaseLayoutComponent', () => {
  let component: MaSc5BaseLayout;
  let fixture: ComponentFixture<MaSc5BaseLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSc5BaseLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSc5BaseLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

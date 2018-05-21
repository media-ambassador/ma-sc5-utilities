import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSc5DetailsPanelComponent } from './details-panel.component';

describe('DetailsPanelComponent', () => {
  let component: MaSc5DetailsPanelComponent;
  let fixture: ComponentFixture<MaSc5DetailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSc5DetailsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSc5DetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

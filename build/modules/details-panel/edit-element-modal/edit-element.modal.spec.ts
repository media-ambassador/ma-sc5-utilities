import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSc5EditElementModal } from './edit-element.modal';

describe('EditElementModalComponent', () => {
  let component: MaSc5EditElementModal;
  let fixture: ComponentFixture<MaSc5EditElementModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSc5EditElementModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSc5EditElementModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

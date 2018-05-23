import { Component, OnInit, Input } from '@angular/core';
import { MaSc5DetailsPanelService } from './details-panel.service';

export abstract class MaSc5BaseEditElementForm implements OnInit {
  @Input() identifier: string;

  constructor(protected maSc5DetailsPanelService: MaSc5DetailsPanelService) { }

  ngOnInit() {
    if (!this.identifier) {
      throw new Error(('Element form identifier is undefined'));
    }

    this.maSc5DetailsPanelService.onSaveElementEditForm().subscribe(formName => {
      if (this.identifier === formName) {
        this.saveElement();
      }
    });
  }

  abstract saveElement();

}

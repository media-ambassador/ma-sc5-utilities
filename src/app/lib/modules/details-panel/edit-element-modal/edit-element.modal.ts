import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'ma-sc5-edit-element-modal',
  templateUrl: './edit-element.modal.html',
  styleUrls: ['./edit-element.modal.scss']
})
export class MaSc5EditElementModal implements OnInit {
  @Input() identifier: string;
  @Input() modalTitle: string;

  @HostBinding('class.open') isOpen = false;

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    if (!this.identifier) {
      throw new Error(('Edit modal identifier is undefined'));
    }
  }

  show() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  closeModal() {
    this.ngxSmartModalService.getModal(this.identifier).close();
  }
}

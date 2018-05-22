import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'ma-sc5-edit-element-modal',
  templateUrl: './edit-element.modal.html',
  styleUrls: ['./edit-element.modal.scss']
})
export class MaSc5EditElementModal implements OnInit {
  @Input() identifier: string;

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    if (!this.identifier) {
      throw new Error(('Identifier is undefinied'));
    }
  }

  closeModal() {
    this.ngxSmartModalService.getModal(this.identifier).close();
  }

}

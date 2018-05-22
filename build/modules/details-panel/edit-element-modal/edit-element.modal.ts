import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-sc5-edit-element-modal',
  template: "\n    <ngx-smart-modal [identifier]=\"'myModal'\">\n      Test\n    </ngx-smart-modal>\n  ",
  styles: ["\n\n  "]
})
export class MaSc5EditElementModal implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { MaSc5MenuItem } from '../../../common/common.model';

@Component({
  selector: 'ma-sc5-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MaSc5MainMenuComponent implements OnInit {
  @Input() menuItems: MaSc5MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}

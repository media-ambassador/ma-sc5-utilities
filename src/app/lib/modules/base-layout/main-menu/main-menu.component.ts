import { Component, OnInit, Input } from '@angular/core';
import { AppMenuTreeItem } from '../app-menu-tree';
import { MaSc5UtilsService } from '../../../services/sc5-utils';

@Component({
  selector: 'ma-sc5-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MaSc5MainMenuComponent implements OnInit {
  @Input() catalogue: AppMenuTreeItem;
  @Input() activeService: string;

  constructor(public sc5UtilsService: MaSc5UtilsService) { }

  ngOnInit() {
  }

}

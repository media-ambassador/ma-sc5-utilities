import { Component, OnInit, Input } from '@angular/core';
import { MaSc5UtilsService } from '../../../services/sc5-utils';
import { AppMenuTreeItem } from '../app-menu-tree';

@Component({
  selector: 'ma-sc5-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MaSc5MainHeaderComponent implements OnInit {
  @Input() channels: string[];
  @Input() defaultChannel: string;
  @Input() catalogues: AppMenuTreeItem[];
  @Input() activeCatalogue: string;
  @Input() userId: string;
  @Input() pageTitle: string;

  constructor(public sc5UtilsService: MaSc5UtilsService) { }

  ngOnInit() {

  }
}

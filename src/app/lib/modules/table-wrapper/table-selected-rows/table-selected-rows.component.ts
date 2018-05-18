import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-sc5-table-selected-rows',
  templateUrl: './table-selected-rows.component.html',
  styleUrls: ['./table-selected-rows.component.scss']
})
export class MaSc5TableSelectedRowsComponent implements OnInit {
  @Input() items: number;
  @Input() totalCount: number;
  @Input() isTotal: boolean;

  constructor() { }

  ngOnInit() {
  }

  getItemsCounts() {
    return this.isTotal ? this.totalCount : this.items;
  }
}

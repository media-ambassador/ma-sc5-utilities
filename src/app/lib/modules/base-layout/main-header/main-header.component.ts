import { Component, OnInit, Input } from '@angular/core';
import { MaSc5UtilsService } from '../../../services/sc5-utils';

@Component({
  selector: 'ma-sc5-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MaSc5MainHeaderComponent implements OnInit {
  @Input() channels: any[]//ApiChannel[];
  @Input() services: string[];

  constructor(public sc5UtilsService: MaSc5UtilsService) { }

  ngOnInit() {
    this.services.forEach(service => {
      this.sc5UtilsService.registerIcon(`icon-${service}`, `./assets/images/icon-${service}.svg`);
    });
  }
}

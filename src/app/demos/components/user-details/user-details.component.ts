import { NgxSmartModalService } from 'ngx-smart-modal';
import { Component, OnInit, Input } from '@angular/core';
import { ApiUser } from '../../../core/api-user/api-user.model';

@Component({
  selector: 'ma-sc5-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: ApiUser;

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  showEditModal(name: string) {
    this.ngxSmartModalService.getModal(name).open();
  }

}

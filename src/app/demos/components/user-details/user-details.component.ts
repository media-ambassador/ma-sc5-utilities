import { Component, OnInit, Input } from '@angular/core';
import { ApiUser } from '../../../core/api-user/api-user.model';

@Component({
  selector: 'ma-sc5-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: ApiUser;

  constructor() { }

  ngOnInit() {
  }

  editEmail() {
    console.log('edytuje');
  }

}

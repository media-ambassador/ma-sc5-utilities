import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ma-sc5-base-layout',
  templateUrl: './base.layout.html',
  styleUrls: ['./base.layout.scss']
})
export class MaSc5BaseLayout implements OnInit {
  pageTitle = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (!!data) {
        this.pageTitle = data as any;
      }
    });
  }

}

import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'ma-sc5-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss']
})
export class MaSc5DetailsPanelComponent implements OnInit {
  @Input() headerTitle: string;

  @HostBinding('class.open') isOpen = false;

  @HostListener('click', ['$event']) onClick(event) {
    if (event.target.classList.contains('open')) {
      this.close();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}

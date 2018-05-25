import { Component, OnInit, Input, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ma-sc5-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss']
})
export class MaSc5DetailsPanelComponent implements OnInit {
  @Input() headerTitle: string;
  @Output() panelDisplay = new EventEmitter<boolean>();

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
    this.panelDisplay.emit(true);
  }

  close() {
    this.isOpen = false;
    this.panelDisplay.emit(false);
  }
}

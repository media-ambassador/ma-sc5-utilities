import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MaSc5DetailsPanelService {
  private editElementSaveSubject = new BehaviorSubject<string>('');

  constructor() { }

  saveElementEditForm(name: string) {
    this.editElementSaveSubject.next(name);
  }

  onSaveElementEditForm(): Observable<string> {
    return this.editElementSaveSubject.asObservable();
  }

}

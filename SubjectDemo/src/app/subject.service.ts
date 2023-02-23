import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  private commonData = new Subject<any>();
  commonData$ = this.commonData.asObservable();

  public setData(data: any) {
    this.commonData.next(data);
}
}



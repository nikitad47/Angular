import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NationData, Data } from '../model/data';
import { api } from '../constants/api.constants';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationsService {

  constructor(private http: HttpClient) { }

  getReport(): Observable<NationData[]> {
    return this.http.get<Data>(api.URL).pipe(
      map((d: Data) => {
        return d.data
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Region} from '../model/region';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Region[]> {
    return this.http.get<Region[]>(API_URL + '/region');
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Direction} from '../model/direction';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Direction[]> {
    return this.http.get<Direction[]>(API_URL + '/direction');
  }
}

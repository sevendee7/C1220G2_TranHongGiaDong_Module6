import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../model/item';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(API_URL + '/postList');
  }

  getListAfterSearch(area: string, price: string, direction: string): Observable<Item[]> {
    return this.http.get<Item[]>(API_URL + '/postList?area_like=' + area + '&price_like=' + price + '&direction_like=' + direction);
  }


  savePost(post): Observable<Item> {
    return this.http.post<Item>(API_URL + '/postList', post);
  }

  findById(id: number): Observable<Item> {
    return this.http.get<Item>(`${API_URL}/postList/${id}`);
  }

  updatePost(id: number, post: Item): Observable<Item> {
    return this.http.put<Item>(`${API_URL}/postList/${id}`, post);
  }

  deletePost(id: number): Observable<Item> {
    return this.http.delete<Item>(`${API_URL}/postList/${id}`);
  }
}

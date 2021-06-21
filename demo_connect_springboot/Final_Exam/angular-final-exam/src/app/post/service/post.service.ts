import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL + '/postList');
  }

  getListAfterSearch(area: string, price: string, direction: string): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL + '/postList?area_like=' + area + '&price_like=' + price + '&direction_like=' + direction);
  }


  savePost(post): Observable<Post> {
    return this.http.post<Post>(API_URL + '/postList', post);
  }

  findById(id: number): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/postList/${id}`);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${API_URL}/postList/${id}`, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${API_URL}/postList/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable()
export class UserService {

  private _url = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this._url+id}`);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this._url, user);
  }

  updateUser(id: string, value: any): Observable<User> {
    return this.http.put<User>(`${this._url+id}`, value);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this._url+id}`, { responseType: 'text' });
  }
}
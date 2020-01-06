import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable()
export class ItemService {

  private _url = 'http://localhost:8080/api/item/';

  constructor(private http: HttpClient) { }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(`${this._url+id}`);
  }

  getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this._url, item);
  }

  updateItem(id: string, value: any): Observable<Item> {
    return this.http.put<Item>(`${this._url+id}`, value);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this._url+id}`, { responseType: 'text' });
  }

}
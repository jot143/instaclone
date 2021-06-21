import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(url);
  }

  post(url, data) {
    return this.http.post(url, data);
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private api: ApiService) { }

  getRandomUser(page, results = 10) {
    const url = `https://randomuser.me/api/?page=${page}&results=${results}&seed=feed`;
    return this.api.get(url);
  }

  getRandomImage() {
    const url = "https://picsum.photos/400/600";
    return this.api.get(url);
  }
}

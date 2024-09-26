import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class B2bService {

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get<Product>(`/store/b2b/${id}`)
  }

  slug(slug: string) {
    return this.http.get<Product>(`/store/b2b/${slug}`)
  }

  list(filters?: {}) {
    var queryString = '';

    if (filters == undefined) {
      filters = {};
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (queryString === '') {
        queryString = `?${key}=${value}`;
      } else {
        queryString = queryString + `&${key}=${value}`;
      }
    });

    return this.http.get<Product[]>(`/store/b2b` + queryString);
  }
}

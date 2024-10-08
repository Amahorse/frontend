import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from './categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get<Categories>(`/categories/${id}`)
  }

  slug(slug: string) {
    return this.http.get<Categories>(`/categories/${slug}`)
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

    return this.http.get<Categories[]>(`/categories` + queryString);
  }
}

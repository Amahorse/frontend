import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './profile.interface';

@Injectable({
  providedIn: 'root'
})
export class profileService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Profile>(`/profile`)
  }

}


import { Token } from './token.interface';
import { Injectable } from '@angular/core';

//https://www.npmjs.com/package/ngx-cookie?activeTab=readme

@Injectable({
  providedIn: 'root'
})
export class tokenService {

  public token!: Token

  set(token: Token) {

    this.token = token;

    localStorage.setItem('token', JSON.stringify(token));

  }

  get(): Token|null {


    console.log('get token');
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      return null;
    }

    this.token = JSON.parse(token);
  
    return this.token;
  }

}

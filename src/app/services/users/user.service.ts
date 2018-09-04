import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { 
    console.log('User Service Initialized....')
  }

  // getUser(){
  //   return this.http.get('http://127.0.0.1:3000/users/login').map(res => res.json());
  // }
}

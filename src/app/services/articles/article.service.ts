import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {
  constructor (private http:Http){
    console.log("Article Service Initialized......");
  }

  getArticles(){
		return this.http.get('http://127.0.0.1:3000/').map(res => res.json());
	}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;
  url = "https://api.themoviedb.org/3/discover/movie?api_key=19e83a03d969e13e8f7c63744506d620&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get(this.ROOT_URL + '/posts', { params, headers })    
  }

  getMovies() {
    let headers = new HttpHeaders({ "Content-Type": "application/json"});
    
    let options = { headers: headers }
    return this.http
      .get(this.url, options)
  }


  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    } 

    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
      // .retry(3)
      // .catch(err => {
      //   console.log(err)
      //   return Observable.of(err)
      // })


  }
}
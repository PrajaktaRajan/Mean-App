import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class PostsService {
  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }
  // Get all posts from the API

  getAllPosts() {
    return this.http.get(environment.AdminUrl + '/api/posts')
      .map(res => res.json());
  }

  getAllUser() {
    return this.http.get(environment.AdminUrl + '/api/allUser')
      .map(res => res.json());
  }
  addUser(newUser) {
    let headers: HttpHeaders = new HttpHeaders();
    // const  headers = new  HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");

    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append('zumo-api-version', '2.0.0');
    let head = new Headers({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
    });
    // head.append('Content-Type', 'application/json');
    // head.append('Access-Control-Allow-Origin', '*');
    console.log("newUser", newUser);
    console.log("newUser", head);
    var body = 'name=praj&location=ght';
    // var body = {
    //   "name": "Praj",
    //   "location": "ghat"
    // };
    return this.httpClient.post(environment.AdminUrl + '/api/addUser', body, httpOptions)
      .map(res => res);
    // return this.httpClient.post(environment.AdminUrl + '/api/addUser', body).pipe()
  }
}

import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // instantiate posts to an empty array
  posts: any = [];
  users: any = [];
  newUser: any = {};
  _this: any = this;
  constructor(private postsService: PostsService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    console.log("in posts component");
    // Retrieve posts from the API
    this.postsService.getAllUser().subscribe(users => {
      console.log("usersusersusers", users)
      this.users = users;
    });


  }
  addUser(users) {
    console.log("users", users);
    this.postsService.addUser(users).subscribe(user => {
      this.users.push(user);
      console.log("this.users", this.users)
    })
  };

  getAllPosts = function () {
    this.postsService.getAllPosts().subscribe(posts => {
      console.log("postsposts", posts)
      this.posts = posts;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import Post from './shared/post';
import PostService from './shared/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public posts: Post[] = [];
  public newTitle: string;
  public newContent: string;

  public activePost: Post;

  constructor(
    private _postService: PostService) {}

  ngOnInit() {
    this._postService.getPosts().then(posts => this.posts = posts);
  }

  editPost(post: Post) {
    this.newTitle = post.title;
    this.newContent = post.content;
    this.activePost = post;
  }

  settingPost() {
    if (this.activePost) {
      this.activePost.title = this.newTitle;
      this.activePost.content = this.newContent;
    } else {
      let newPost = new Post(this.newTitle, this.newContent);
      this.posts.push(newPost);
    }
    this.resetParams()
  }

  deletePost(post: Post) {
    let answer = confirm('Are you sure you want to delete this?');
    if (answer) {
      this.posts = this.posts.filter(p => p.title != post.title);
    } else {
      return false;
    }
  }

  private resetParams(){
    this.activePost = null;
    this.newTitle = null;
    this.newContent = null;
  }
}

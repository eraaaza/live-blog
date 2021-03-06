import { Injectable } from '@angular/core';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      'Nature is really cool!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
      'Author: test@123.com',
      new Date(),
      1
    ),
    new Post(
      'Hampi',
      'Hampi is really cool!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
      'Author: test@123.com',
      new Date(),2
    ),
    new Post(
      'El Salvador',
      'El Salvador is really cool!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
      'Author: test@123.com',
      new Date(),
      5
    ),
  ];

  // facility 1
  getPosts() {
    return this.listOfPosts;
  }

  // facility 2
  deletePosts(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  // facility 3
  addPosts(post: Post) {
    this.listOfPosts.push(post);
  }

  // facility 4
  updatePosts(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  // new facility 5 
  getPost(index: number) {
    return this.listOfPosts[index];
  }

  // facility 6
  likePost(index:number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }
}

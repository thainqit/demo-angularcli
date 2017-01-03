import { Injectable } from '@angular/core';

import Post from './post';

@Injectable()
export default class PostService {

  public posts: Post[];

  constructor() { }

  getPosts(): Promise<Post[]>{
    return Promise.resolve(POSTSDATA);
  }

}

const POSTSDATA: Post[] = [
  { title: 'merry christmas', content: 'test 1' },
  { title: 'happy new year', content: 'test 1' },
  { title: 'happy birday', content: 'test 1' }
]
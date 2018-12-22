import { Component,
         EventEmitter,
         Output  } from '@angular/core';

import { Post } from '../post.model';

@Component({
selector : 'app-post-create',
templateUrl : './post-create.component.html',
styleUrls :['./post-create.component.css']
}
)

export class PostCreateComponent{

  enteredContent = '';
  enteredTitle = '';


  @Output() postCreated  = new EventEmitter<Post>();

  onAddPost()
  {
    // console.dir(postInput);   onAddPost(postInput: HTMLTextAreaElement)
    // this.newPost = postInput.value;
    // this.newPost = this.enteredValue;

    const post: Post = {title: this.enteredTitle, content: this.enteredContent};

    this.postCreated.emit(post);
  }

}

import { Component } from '@angular/core';

@Component({
selector : 'app-post-create',
templateUrl : './post-create.component.html',
styleUrls :['./post-create.component.css']
}
)

export class PostCreateComponent{

  enteredValue = '';
  newPost = 'NO CONTENT';

  onAddPost()
  {
    // console.dir(postInput);   onAddPost(postInput: HTMLTextAreaElement)
    // this.newPost = postInput.value;
    this.newPost = this.enteredValue;
  }

}

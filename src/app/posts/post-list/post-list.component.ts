import { Component ,Input} from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponent {
  /*
  posts = [
  {title : 'first post' , content : 'This is the first post"s content'},
  {title : 'Second post' , content : 'This is the second post"s content'},
  {title : 'Third post' , content : 'This is the thisrd post"s content'}
]*/

@Input() posts: Post[] = [];

}

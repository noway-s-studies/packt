import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newPost = '';

  onAddPost(newPost: HTMLTextAreaElement) {
    console.dir(newPost);
    this.newPost = newPost.value;
  }
}

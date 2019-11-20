import { Component, OnInit, EventEmitter , Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
	@Input() currentPost: Post;
	@Output() NewPost: EventEmitter<Post> = new EventEmitter();
	@Output() updatedPost: EventEmitter<Post> = new EventEmitter();
	@Input() isEdit: boolean;

	constructor(private postService: PostService) { }

  ngOnInit() {
  }

	addPost(title, body){
		if(!title || !body)	{
			alert("add Post!")
		}				
		else{
			this.postService.savePost({title, body} as Post).subscribe(post => {
				this.NewPost.emit(post);
				console.log(this)
			})
			this.currentPost.body = '';
			this.currentPost.title = '';
		}
	}
	updatePost(){
		console.log(this)
		console.log(this.currentPost)
		this.postService.updatePost(this.currentPost).subscribe(post => {
			this.isEdit = false;
			this.updatedPost.emit(post);
		})
	}



}

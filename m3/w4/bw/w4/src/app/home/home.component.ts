import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts!: Post[]
  post!:Post
  liked:boolean = false;
  edit:boolean = false;
  caption!:string[];

  constructor(private postsSrv: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postsSrv.getPosts().subscribe((res) => {
      this.posts = res
      this.caption = res.map(post =>post.caption)
      console.log(this.posts);
    })
  }

  like(){
    this.liked =  !this.liked;
  }

  getPost(id:number){
    this.postsSrv.getPost(id).subscribe(( res:any) => {
      this.post = res
    })
  }

  editPost(id:number){
    this.edit = !this.edit
  }

  modificaPost(id:number,caption:string){
    this.postsSrv.modificaPost(id,{caption:caption}).subscribe((res) =>{console.log(res)}
    )
    // this.getPosts()
  }
}

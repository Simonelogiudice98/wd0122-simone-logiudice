import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input() post!:Post
  edit:boolean = false
  caption!:string;
  liked:boolean = false;
  logged:boolean = this.authService.isUserLogged
  data = new Date()

  constructor(private postsSrv: PostsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedObs.subscribe((res:boolean)=> {
      this.logged = res;
    })
    this.caption = this.post.caption
    // this.liked = this.post.liked?.includes()
  }
  modificaPost(id:number,caption:string){
    this.postsSrv.modificaPost(id,{caption:caption}).subscribe((res:any) =>{
      this.post = res

    })
    this.edit = !this.edit

  }

  like(){
    this.liked =  !this.liked;
  }
}

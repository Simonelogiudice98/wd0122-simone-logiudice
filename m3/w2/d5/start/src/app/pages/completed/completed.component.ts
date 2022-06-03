import { Component, OnInit } from '@angular/core';
import { CTodo } from 'src/app/class/classe';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  todos!:CTodo[]

  constructor(private todoService:TodoService){
    this.todos = todoService.todos.filter((res)=>{
      if(res.completed == true){
        return true
      }
      return false;
    })



  }

  ngOnInit(): void {
  }

}

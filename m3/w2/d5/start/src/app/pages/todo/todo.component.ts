import { Component, OnInit, Output } from '@angular/core';
import { CTodo } from 'src/app/class/classe';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos!:CTodo[]

   title:string = '';

  constructor(private todoService:TodoService){
    this.todos = todoService.todos.filter((res)=>{
      if(res.completed == false){
        return true
      }
      return false;
    })



  }

  ngOnInit(): void {


  }



  saveTodo(){
    let newTodo:CTodo = new CTodo(this.title)
    this.todoService.addTodo(newTodo)
    this.todos = this.todoService.todos.filter((res)=>{
      if(res.completed == false){
        return true
      }
      return false;
    })

  }

  cancelTodo(id:number){

    this.todoService.deleteTodo(id)
    this.todos = this.todoService.todos.filter((res)=>{
      if(res.completed == false){
        return true
      }
      return false;
    })
  }
  doneTodo(id:number){
    this.todoService.updateTodo(id)
    this.todos = this.todoService.todos.filter((res)=>{
      if(res.completed == false){
        return true
      }
      return false;
    })

  }

  }


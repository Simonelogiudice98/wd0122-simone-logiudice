import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sito di prova';
  hover(p:boolean){
    this.title = p?"sito di prova": "test"
  }
  nome:any = document.querySelector('.nome')
  form(e:any){
    e.preventDefault();
    

  }
}

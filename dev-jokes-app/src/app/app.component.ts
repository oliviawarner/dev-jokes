import { Component } from '@angular/core';
import { DevJokesService } from './services/dev-jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private devJokesService:DevJokesService
  ) {}

  joke:any= [];
  question:string="";
  punchline:string="";

  ngOnInit() {
    this.devJokesService.getDevJoke().subscribe(
      (data) => {
        this.joke = data;
        this.question = this.joke[0].question;
        this.punchline = this.joke[0].punchline;
      },
      error => {
        console.log(error);
      }
    );
  }

}

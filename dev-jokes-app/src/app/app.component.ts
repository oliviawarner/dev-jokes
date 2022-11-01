import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DevJokesService } from './services/dev-jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(
    private devJokesService:DevJokesService
  ) {}

  jokeSub$: Subscription = new Subscription;

  joke:any= [];
  question:string="";
  punchline:string="";

  ngOnInit() {
    this.jokeSub$ = this.devJokesService.getDevJoke().subscribe(
      (data) => {
        this.joke = data;
        this.question = this.joke[0].question;
        this.punchline = this.joke[0].punchline;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnDestroy() {
    this.jokeSub$.unsubscribe();
  }
}

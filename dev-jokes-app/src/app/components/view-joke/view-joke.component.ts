import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DevJokesService } from 'src/app/services/dev-jokes.service';

@Component({
  selector: 'app-view-joke',
  templateUrl: './view-joke.component.html',
  styleUrls: ['./view-joke.component.css']
})
export class ViewJokeComponent implements OnInit, OnDestroy {

  constructor(private devJokesService:DevJokesService) {}

  jokeSub$: Subscription = new Subscription;

  joke:any= [];
  question:string="";
  punchline:string="";

  showProgressBar:boolean=false;

  getJoke() {
    this.showProgressBar = true;

    //Receives joke data from service
    this.jokeSub$ = this.devJokesService.getDevJoke().subscribe(
      (data) => {
        this.joke = data;
        this.question = this.joke[0].question;
        this.punchline = this.joke[0].punchline;
        this.showProgressBar = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getJoke();
  }

  newJoke() {
    this.getJoke();
  }

  ngOnDestroy() {
    this.jokeSub$.unsubscribe();
  }

}

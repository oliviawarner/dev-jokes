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

  ngOnInit() {
    this.devJokesService.getDevJoke();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DevJokesService } from 'src/app/services/dev-jokes.service';

@Component({
  selector: 'app-submit-joke',
  templateUrl: './submit-joke.component.html',
  styleUrls: ['./submit-joke.component.css']
})
export class SubmitJokeComponent implements OnInit {
  jokeForm!: FormGroup;
  jokeFormResult:Object = new Object;

  constructor(private fb: FormBuilder, private devJokesService:DevJokesService) { }

  ngOnInit(): void {
    //Initializing form values and validators
    this.jokeForm = this.fb.group({
      name:[''],
      twitter:[''],
      question:['', Validators.required],
      punchline:['', Validators.required]
    });
  }

  submitJoke(jokeForm:FormGroup) {
    this.jokeFormResult = JSON.stringify(this.jokeForm.value);
    //Display spinner
    const spinner = document.getElementById('spinner_container') as HTMLInputElement;
    spinner.style.display='block';
    //Calls submission function in service
    this.devJokesService.submitDevJoke(this.jokeFormResult, this.jokeForm);
  }
}

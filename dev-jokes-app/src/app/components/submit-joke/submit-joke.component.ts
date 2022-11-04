import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSpinner } from '@angular/material/progress-spinner';
import { BehaviorSubject } from 'rxjs';
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
    this.jokeForm = this.fb.group({
      name:[''],
      twitter:[''],
      question:['', Validators.required],
      punchline:['', Validators.required]
    });
  }

  submitJoke(jokeForm:FormGroup) {
    this.jokeFormResult = JSON.stringify(this.jokeForm.value);
    console.log(this.jokeFormResult);
    const spinner = document.getElementById('spinner_container') as HTMLInputElement;
    spinner.style.display='block';
    this.devJokesService.submitDevJoke(this.jokeFormResult, this.jokeForm);
  }
}

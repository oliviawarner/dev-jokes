import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-submit-joke',
  templateUrl: './submit-joke.component.html',
  styleUrls: ['./submit-joke.component.css']
})
export class SubmitJokeComponent implements OnInit {
  jokeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.jokeForm = this.fb.group({
      name:[''],
      twitter:[''],
      question:['', Validators.required],
      punchline:['', Validators.required]
    });
  }

  submitJoke(jokeForm:FormGroup) {
    let formResult = JSON.stringify(this.jokeForm.value);
    console.log(formResult);
  }
}

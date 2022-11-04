import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DevJokesService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  //Gets Joke
  getDevJoke() {
    const getDevJokePath = `https://backend-omega-seven.vercel.app/api/getjoke`;
    return this.http.get(getDevJokePath);
  }

  //Posts New Joke
  submitDevJoke(jokeFormResult:Object, jokeForm:FormGroup) {
    const postDevJokePath=`https://backend-omega-seven.vercel.app/api/addjoke`;
    return this.http.post(postDevJokePath,jokeFormResult, {responseType: 'text'})
    .subscribe((res) => {
      //Gets API response
      let response = JSON.stringify(res);
      let responseObj = JSON.parse(response);
      if(responseObj == "{status:'Joke created'}") {
        //Success Snack
        this._snackBar.open('Joke has been submitted', 'Close', {
          duration:5000
        });
        //Hides Spinner
        const spinner = document.getElementById('spinner_container') as HTMLInputElement;
        spinner.style.display='none';
        //Resets Form
        jokeForm.reset();
        //Resets Input Errors
        Object.keys(jokeForm.controls).forEach(key => {
          jokeForm.get(key)?.setErrors(null) ;
        });
        jokeForm.markAsPristine();
        jokeForm.markAsUntouched();
      }
      else {
        this._snackBar.open('Error has occured. Please try again.', 'Close', {
          duration:5000
        });
      }
    },
    error => {
      this._snackBar.open('Error has occured. Please try again.', 'Close', {
        duration:5000
      });
    });
  }
}

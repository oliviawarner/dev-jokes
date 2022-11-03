import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevJokesService {

  constructor(private http: HttpClient) { }

  getDevJoke() {
    const getDevJokePath = `https://backend-omega-seven.vercel.app/api/getjoke`;
    return this.http.get(getDevJokePath);
  }

  submitDevJoke(jokeFormResult:Object) {
    const postDevJokePath=`https://backend-omega-seven.vercel.app/api/addjoke`;
    return this.http.post(postDevJokePath,jokeFormResult, {responseType: 'text'})
    .subscribe((res) => {
      let response = JSON.stringify(res);
      console.log(response);
    });
  }
}

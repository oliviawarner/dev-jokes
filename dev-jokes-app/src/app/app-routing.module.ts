import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewJokeComponent } from './components/view-joke/view-joke.component';
import { SubmitJokeComponent } from './components/submit-joke/submit-joke.component';

const routes: Routes = [
  { path: '', component: ViewJokeComponent },
  {path:'submit-joke', component:SubmitJokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

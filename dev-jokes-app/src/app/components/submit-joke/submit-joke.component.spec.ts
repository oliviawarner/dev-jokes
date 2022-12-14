import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubmitJokeComponent } from './submit-joke.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SubmitJokeComponent', () => {
  let component: SubmitJokeComponent;
  let fixture: ComponentFixture<SubmitJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ SubmitJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial form values should be initialized to empty', () => {
    const jokeFormGroup = component.jokeForm;
    const jokeFormValues = {
      name: '',
      twitter:'',
      question:'',
      punchline: ''
    }
    expect(jokeFormGroup.value).toEqual(jokeFormValues);
  });

  it('form group should have 2 input elements', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#jokeForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('form group should have 2 textarea elements', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#jokeForm');
    const textareaElements = formElement.querySelectorAll('textarea');
    expect(textareaElements.length).toEqual(2);
  });

  it('form should be initialized to invalid', () => {
    expect(component.jokeForm.valid).toBeFalsy();
  });

  it('submit button should be initially disabled', () => {
    const submitBtn = fixture.debugElement.nativeElement.querySelector('#submit_joke');
    expect(submitBtn.attributes.disabled).toBeTruthy();
  });

  it('spinner should be hidden on service call', () => {
    const spinner = fixture.debugElement.nativeElement.querySelector('#spinner_container');
    expect(spinner.style.display).toEqual('');
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubmitJokeComponent } from './submit-joke.component';

describe('SubmitJokeComponent', () => {
  let component: SubmitJokeComponent;
  let fixture: ComponentFixture<SubmitJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
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

  it('initial form values should equal group', () => {
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

});

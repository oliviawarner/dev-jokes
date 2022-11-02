import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJokeComponent } from './view-joke.component';

describe('ViewJokeComponent', () => {
  let component: ViewJokeComponent;
  let fixture: ComponentFixture<ViewJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ ViewJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('joke arr should not be null', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.joke).not.toBeNull();
  });

  it('question should not be null', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.question).not.toBeNull();
  });

  it('punchline should not be null', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.punchline).not.toBeNull();
  });

  it('joke subscription should be defined', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.jokeSub$).toBeDefined();
  });

  it('joke subscription should not be null', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.jokeSub$).not.toBeNull();
  });

  it('#getJoke should be defined', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.getJoke).toBeDefined();
  });

  it('#nextJoke should be defined', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.nextJoke).toBeDefined();
  });

  it('progress bar should be initialized to false', () => {
    const fixture = TestBed.createComponent(ViewJokeComponent);
    const app = fixture.componentInstance;
    expect(app.showProgressBar).toBeFalse();
  });

});

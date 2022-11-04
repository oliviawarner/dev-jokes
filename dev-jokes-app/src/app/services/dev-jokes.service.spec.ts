import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DevJokesService } from './dev-jokes.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('DevJokesService', () => {
  let service: DevJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule
      ]
    });
    service = TestBed.inject(DevJokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getDevJoke should return value from observable',
    () => {
    service.getDevJoke().subscribe(value => {
      expect(value).toBe('observable value');
    });
  });



});



import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DevJokesService } from './dev-jokes.service';

describe('DevJokesService', () => {
  let service: DevJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DevJokesService);
  });

  // beforeAll(function() {
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  // });

  // it('should have custom timeout', function(){
  //   console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL); //prints 999999
  // });

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



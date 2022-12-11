import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirportService } from './airport.service';

describe('AirportService', () => {
  let http: HttpClient;
  let service: AirportService = new AirportService(http);

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [ HttpClientTestingModule ],
       providers: [ AirportService ]
       });
    service = TestBed.inject(AirportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

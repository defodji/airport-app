import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arrival } from '../models/arrival.model';
import { Departure } from '../models/departure.model';

const baseUrl = 'http://localhost:8080/airportschedule';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  getDepartures(): Observable<Departure[]> {
    return this.http.get<Departure[]>(`${baseUrl}/departures`);
  }

  getArrivals(): Observable<Arrival[]> {
    return this.http.get<Arrival[]>(`${baseUrl}/arrivals`);
  }

  addDeparture(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/departures`, data);
  }

  addArrival(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/arrivals`, data);
  }
}

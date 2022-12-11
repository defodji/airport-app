import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";

import { Arrival } from 'src/app/models/arrival.model';
import { Departure } from 'src/app/models/departure.model';
import { AirportService } from 'src/app/services/airport.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  everyTenSeconds: Observable<number> = timer(0, 10000);
  arrivals?: Arrival[];
  departures?: Departure[];
  currentTime?:any;
  displayTime?:string;

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.subscription = this.everyTenSeconds.subscribe(time => {
      this.currentTime = new Date();
      let hours = this.currentTime.getHours();
      let minutes = this.currentTime.getMinutes();
      this.displayTime = Utils.padWithZero(hours,2) + ":" + Utils.padWithZero(minutes,2);
      this.retrieveArrivals();
      this.retrieveDepartures();
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  retrieveArrivals(): void {
    this.airportService.getArrivals()
      .subscribe({
        next: (data) => {
          this.arrivals = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  retrieveDepartures(): void {
    this.airportService.getDepartures()
      .subscribe({
        next: (data) => {
          this.departures = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

import { Component } from '@angular/core';
import { Departure } from 'src/app/models/departure.model';
import { Time } from 'src/app/models/time.model';
import { AirportService } from 'src/app/services/airport.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-add-departure',
  templateUrl: './add-departure.component.html',
  styleUrls: ['./add-departure.component.css']
})

export class AddDepartureComponent {
  time: Time = { hour: 0, minute: 0 };
  departure: Departure = {
    flightNumber: '',
    to: '',
    scheduledTime: '',
    airline: '',
    aircraft: ''
  };
  submitted = false;

  constructor(private airportService: AirportService) { }

  saveDeparture(): void {
    const data = {
      flightNumber: this.departure.flightNumber,
      to: this.departure.to,
      scheduledTime: Utils.padWithZero(this.time.hour,2) + ":" + Utils.padWithZero(this.time.minute,2),
      airline: this.departure.airline,
      aircraft: this.departure.aircraft
    };

    this.airportService.addDeparture(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDeparture(): void {
    this.submitted = false;
    this.time = { hour: 0, minute: 0 };
    this.departure = {
      flightNumber: '',
      to: '',
      scheduledTime: '',
      airline: '',
      aircraft: ''
    };
  }
}

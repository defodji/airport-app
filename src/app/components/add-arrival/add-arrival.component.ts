import { Component } from '@angular/core';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Arrival } from 'src/app/models/arrival.model';
import { Time } from 'src/app/models/time.model';
import { AirportService } from 'src/app/services/airport.service';
import { Utils } from 'src/app/utils';


@Component({
  selector: 'app-add-arrival',
  templateUrl: './add-arrival.component.html',
  styleUrls: ['./add-arrival.component.css']
})
export class AddArrivalComponent {
  arrival: Arrival = {
    flightNumber: '',
    from: '',
    scheduledTime: '',
    airline: '',
    aircraft: ''
  };
  time: Time = { hour: 0, minute: 0 };
  submitted = false;

  constructor(private airportService: AirportService) { }

  saveArrival(): void {
    const data = {
      flightNumber: this.arrival.flightNumber,
      from: this.arrival.from,
      scheduledTime: Utils.padWithZero(this.time.hour,2) + ":" + Utils.padWithZero(this.time.minute,2),
      airline: this.arrival.airline,
      aircraft: this.arrival.aircraft
    };

    this.airportService.addArrival(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }



  newArrival(): void {
    this.submitted = false;
    this.time = { hour: 0, minute: 0 };
    this.arrival = {
      flightNumber: '',
      from: '',
      scheduledTime: '',
      airline: '',
      aircraft: ''
    };
  }
}

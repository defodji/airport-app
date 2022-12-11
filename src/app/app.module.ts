import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbTimepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartureComponent } from './components/add-departure/add-departure.component';
import { AddArrivalComponent } from './components/add-arrival/add-arrival.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDepartureComponent,
    AddArrivalComponent,
    FlightsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartureComponent } from './components/add-departure/add-departure.component';
import { AddArrivalComponent } from './components/add-arrival/add-arrival.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'flights', pathMatch: 'full' },
  { path: 'flights', component: FlightsListComponent },
  { path: 'add-arrival', component: AddArrivalComponent },
  { path: 'add-departure', component: AddDepartureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './components/flight-list/flight-list.component';


const routes: Routes = [
  { path: '', component: FlightListComponent},
  { path: 'flights', component: FlightListComponent},
  { path: '**', component: FlightListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

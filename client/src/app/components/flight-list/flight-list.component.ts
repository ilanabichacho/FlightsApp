
import { cloneDeep } from 'lodash';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { FilterParams } from 'src/app/models/filterParams';
import { Flight } from 'src/app/models/flight';
import { FlighServiceService } from 'src/app/services/fligh-service.service';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FlightListComponent implements OnInit {

  public flights$: Observable<Flight[]> = of([]);
  public countries$: Observable<Country[]> = of([]);
  public cities$: Observable<City[]> = of([]);

  public flightNameControl: FormControl;
  public datesControl: FormControl;
  public cityControl: FormControl;
  public countryControl: FormControl;
  public group: FormGroup;
  


  constructor(public flighServiceService: FlighServiceService,
              private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit() {

    this.getAllFlights();
    this.getCountries();
    this.getCities(null);

    this.flightNameControl = new FormControl();
    this.datesControl = new FormControl();
    this.cityControl = new FormControl();
    this.countryControl = new FormControl();

    this.group = new FormGroup({
      flightNameControl: this.flightNameControl,
      datesControl: this.datesControl,
      cityControl: this.cityControl,
      countryControl: this.countryControl
    })

    this.group?.get('cityControl')?.disable();
  }

  getAllFlights() {

    this.flights$ = this.flighServiceService.SelectAllFlights();
  }

  getCountries() {
    this.countries$ = this.flighServiceService.SelectCountries();
  }

  getCities(countryId: number) {
    this.cities$ = cloneDeep(this.flighServiceService.SelectCities(countryId));
    this.cities$.subscribe(data => console.log("data", data))
 
    this.cityControl?.patchValue(null);
    
    this.group?.get('cityControl')?.enable();
   
  }

  countryClicked(event: any) {

    this.getCities(event.target.value);

  }

  cityClicked(event: any) {

  }
  
  search() {
    
    let params:FilterParams = new FilterParams();

    params.numRowsInSearch= 2; //need to be taken from UI
    params.currentPage = 1;
    params.flightName = (this.flightNameControl.value != "")? this.flightNameControl.value: null;
    params.cityId = (this.cityControl.value != "")? this.cityControl.value: null;
    params.countryId = (this.countryControl.value != "")? this.countryControl.value: null;

    if(this.datesControl.value != null && this.datesControl.value[0] != null) {
      params.fromDate = this.datesControl.value[0];
    }
    else params.fromDate = null;
    if(this.datesControl.value != null && this.datesControl.value[1] != null) {
      params.toDate = this.datesControl.value[1];
    
    }
    else params.toDate = null;
   
    console.log("this.cityControl.value", this.cityControl)
  
    this.flights$ = this.flighServiceService.getFilterFlightsPaging(params);
    this.cdr.detectChanges();
  }
}

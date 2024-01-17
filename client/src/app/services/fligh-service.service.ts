
import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.services';
import { Flight } from '../models/flight';
import { Country } from '../models/country';
import { City } from '../models/city';
import { FilterParams } from '../models/filterParams';


@Injectable({
  providedIn: 'root'
})
export class FlighServiceService {

  constructor(private httpService: HttpService) { }

  getFilterFlightsPaging(filterParams: FilterParams) {

    return this.httpService.post("Flights/filterFlightsPaging", filterParams);
   
  }

  SelectAllFlights() {
    return this.httpService.get<Array<Flight>>("Flights/SelectAllFlights", null);
  }

  SelectCountries() {
    return this.httpService.get<Array<Country>>("Flights/selectCountries", null);
  }

  SelectCities(countryId: number) {

    let params:FilterParams = new FilterParams();

    params.countryId = countryId;

    return this.httpService.post<Array<City>>("Flights/selectCities", params);
  }

  }


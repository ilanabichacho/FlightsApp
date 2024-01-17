import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './core/http.services';
import { ConfigService } from './core/config.services';

export const enviroment = {
  production: false,
  configFile: 'assets/config/app.config.json'
}

export function ConfigLoader(configService: ConfigService) {
    return () => configService.load(enviroment.configFile);
}

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService,
              ConfigService,
             {
              provide: APP_INITIALIZER,
              useFactory: ConfigLoader,
              deps: [ConfigService],
              multi: true
             }],
  bootstrap: [AppComponent]
})
export class AppModule { }

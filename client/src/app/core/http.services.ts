import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.services';
import { Observable, map } from 'rxjs';

@Injectable()
export class HttpService {
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public webAPIEndpoint: string;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {
    this.webAPIEndpoint = this.configService.getConfig().webAPIEndPoint;
  }

  get<T>(url: string, queryParams: any): Observable<any> {
    return this.httpClient.get<any>(this.webAPIEndpoint + url, {
      withCredentials: false,
      observe: 'response',
      params: queryParams,
    })
    .pipe(
      map(res => {
        return res.body;
      })
    )
  }

  post<T>(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.webAPIEndpoint}${url}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    })
    .pipe(
      map(res => {
        return res;
      }))
  }
}

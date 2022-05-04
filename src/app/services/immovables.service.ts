import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImmovablesService {
  // private apiUrl = '/api/url';
  private apiUrl = 'https://witei.com/api/v1/houses';
  private authToken = '3e80ddb2-4dca-4774-a3ce-bbb37f5ee04b';

  constructor(
    private readonly http: HttpClient // eslint-disable-line
  ) {} // eslint-disable-line

  public getOpportunities(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${this.authToken}`,
    });
    return this.http.get(`${this.apiUrl}`, { headers: headers });
  }
}

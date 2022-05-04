import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImmovablesService {
  private apiUrl = 'http://api.domus.la/types';

  constructor(
    private readonly http: HttpClient // eslint-disable-line
  ) {} //eslint-disable-line

  public getOpportunities(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `APP_USR_b00fa0d44ed38d8f731a25ea882bc4cb`,
    });
    return this.http.get(`${this.apiUrl}`, { headers: headers });
  }
}

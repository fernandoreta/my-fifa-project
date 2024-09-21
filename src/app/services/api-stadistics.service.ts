import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueNames } from '../../assets/enums';

@Injectable({
  providedIn: 'root'
})
export class ApiStadisticsService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';

  getLeagueTable(nameLeague: LeagueNames): Observable<any> {
    return this.http.get<any>(`${this.url}/${nameLeague}`);
  }

  getJsonTables() {
    return this.http.get<any>(`${this.url}/tables`);
  }
}

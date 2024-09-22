import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LeagueNames } from '../../assets/enums';
import { ILeagueTable, IMockData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiStadisticsService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';
  private selectedPlayerSubject = new BehaviorSubject<string | null>(null);
  selectedPlayer$ = this.selectedPlayerSubject.asObservable();

  setSelectedPlayer(playerName: string) {
    this.selectedPlayerSubject.next(playerName);
  }

  getLeagueTable(nameLeague: LeagueNames): Observable<ILeagueTable[]> {
    return this.http.get<any>(`${this.url}/${nameLeague}`);
  }

  getJsonTables() {
    return this.http.get<any>(`${this.url}/tables`);
  }

  getTopScorers(): Observable<IMockData> {
    const mockData: IMockData = {
      ligaMxTopScorers: [
        { playerName: "André-Pierre Gignac", teamName: "Tigres", goals: 15 },
        { playerName: "Jonathan Rodríguez", teamName: "América", goals: 13 },
        { playerName: "Rogelio Funes Mori", teamName: "Monterrey", goals: 12 },
        { playerName: "Alexis Vega", teamName: "Guadalajara", goals: 11 },
        { playerName: "Carlos González", teamName: "Pumas", goals: 10 },
        { playerName: "Víctor Dávila", teamName: "León", goals: 9 },
        { playerName: "Germán Berterame", teamName: "Santos Laguna", goals: 9 },
        { playerName: "Julio Furch", teamName: "Atlas", goals: 8 },
        { playerName: "Nicolás Ibáñez", teamName: "Pachuca", goals: 8 },
        { playerName: "Juan Ignacio Dinenno", teamName: "Pumas", goals: 7 }
      ],
      premierLeagueTopScorers: [
        { player: "Erling Haaland", team: "Manchester City", goals: 28 },
        { player: "Mohamed Salah", team: "Liverpool", goals: 26 },
        { player: "Harry Kane", team: "Tottenham Hotspur", goals: 24 },
        { player: "Cristiano Ronaldo", team: "Manchester United", goals: 22 },
        { player: "Heung-Min Son", team: "Tottenham Hotspur", goals: 20 },
        { player: "Sadio Mané", team: "Liverpool", goals: 18 },
        { player: "Diogo Jota", team: "Liverpool", goals: 17 },
        { player: "Jamie Vardy", team: "Leicester City", goals: 15 },
        { player: "Raheem Sterling", team: "Manchester City", goals: 14 },
        { player: "Bruno Fernandes", team: "Manchester United", goals: 13 }
      ],
      leagues: ['Liga MX', 'Premier League']
    };
  
    return of(mockData);
  }  
  
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, shareReplay, Subject, switchMap } from 'rxjs';
import { ApiStadisticsService } from '../services/api-stadistics.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LeagueNames } from '../../assets/enums';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ApiStadisticsService ]
})
export class TeamListComponent {
  constructor(private apiStats: ApiStadisticsService) {}

  private selectedLeagueSubject = new BehaviorSubject<string>(LeagueNames.premierLeagueTable);
  selectedLeague$ = this.selectedLeagueSubject.asObservable();

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  premierLeagueTable$ = this.apiStats.getLeagueTable(LeagueNames.premierLeagueTable)
    .pipe(
      shareReplay(1),//share the last value
      catchError(err => {
        this.errorMessageSubject.next(err.statusText);
        return EMPTY;
      })
    );

  ligaMxTable$ = this.apiStats.getLeagueTable(LeagueNames.ligaMxTable)
    .pipe(
      shareReplay(1),//share the last value
      catchError(err => {
        this.errorMessageSubject.next(err.statusText);
        return EMPTY;
      })
    );

  leagues$ = this.apiStats.getJsonTables()
    .pipe(
      shareReplay(1),//share the last value
      catchError(err => {
        this.errorMessageSubject.next(err.statusText);
        return EMPTY;
      })
    );

    vm$ = combineLatest([
      this.selectedLeague$,
      this.selectedLeague$.pipe(
        switchMap(league =>
          league === LeagueNames.premierLeagueTable ? this.premierLeagueTable$ : this.ligaMxTable$
        )
      ),
      this.leagues$
    ]).pipe(
      map(([selectedLeague, leagueData, leagues]) => ({
        selectedLeague,
        leagueData,
        leagues
      }))
    );

  changeLeague(league: string): void {
    const nextLeague = league === 'Premier' ? LeagueNames.premierLeagueTable : LeagueNames.ligaMxTable
    this.selectedLeagueSubject.next(nextLeague);
  }
}

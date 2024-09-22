import { Component, EventEmitter, Output } from '@angular/core';
import { ApiStadisticsService } from '../services/api-stadistics.service';
import { catchError, EMPTY, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-scores-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app-top-scores-list.component.html',
  styleUrl: './app-top-scores-list.component.scss',
  providers: [ ApiStadisticsService ]
})
export class TopScoresListComponent {
  constructor(private apiService: ApiStadisticsService) {}
  @Output() playerSelected = new EventEmitter<string>();
  selectedPlayer!: string;

  selectPlayer(playerName: string) {
    this.selectedPlayer = playerName;
    this.playerSelected.emit(playerName);
  }
  selectedLeague: string = 'Liga MX';
  vm$ = this.apiService.getTopScorers().pipe(
    catchError(err => {
      this.errorMessage$ = of('Error fetching product details');
      return EMPTY;
    })
  );

  changeLeague(league: string) {
    this.selectedLeague = league;
  }

  errorMessage$ = of('');
}

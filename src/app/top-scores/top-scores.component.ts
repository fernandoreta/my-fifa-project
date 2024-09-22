import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ApiStadisticsService } from '../services/api-stadistics.service';
import { catchError, EMPTY, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TopScoresListComponent } from '../app-top-scores-list/app-top-scores-list.component';
import { PlayerDetailComponent } from '../player-detail/app-player-detail.component';

@Component({
  selector: 'app-top-scores',
  standalone: true,
  imports: [ CommonModule, HttpClientModule, TopScoresListComponent, PlayerDetailComponent ],
  templateUrl: './top-scores.component.html',
  styleUrl: './top-scores.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ApiStadisticsService ]
})
export class TopScoresComponent {
  selectedPlayer: string | null = null;

  onPlayerSelected(playerName: string) {
    this.selectedPlayer = playerName;
  }
}

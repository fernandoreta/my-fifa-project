import { Component, Input } from '@angular/core';
import { ApiStadisticsService } from '../services/api-stadistics.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app-player-detail.component.html',
  styleUrl: './app-player-detail.component.scss',
  providers: [ ApiStadisticsService ]
})
export class PlayerDetailComponent {
  constructor() {}
  @Input() selectedPlayer: string | null = null;

}

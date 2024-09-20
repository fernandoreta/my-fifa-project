import { Routes } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TopScoresComponent } from './top-scores/top-scores.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'team-list',
        component: TeamListComponent
    },
    {
        path: 'top-scores',
        component: TopScoresComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export interface ILeagueTable {
    team: string;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    won: number;
    lost: number;
    drawn: number;
    playedGames: number;
}

export interface ITopScorer {
    playerName: string;
    teamName: string;
    goals: number;
}

export interface ITopScorerPL {
    player: string;
    team: string;
    goals: number;
}

export interface IMockData {
    ligaMxTopScorers: ITopScorer[];
    premierLeagueTopScorers: ITopScorerPL[];
    leagues: string[];
}

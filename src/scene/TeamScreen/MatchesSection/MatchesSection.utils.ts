import { Match } from 'test-task-football-teams-api/lib/types';

export const getNameOfRivalTeam = (match: Match, currTeamId: number) => {
  if (currTeamId === match.homeTeam.id) {
    return match.awayTeam.name;
  }
  if (currTeamId === match.awayTeam.id) {
    return match.homeTeam.name;
  }
  return '-';
};

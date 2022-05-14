import { AllowedCompetitions } from './constants';
import { TeamFull, TeamFullResponsePayload, TeamShort, TeamShortResponsePayload } from './types';
import { delay } from '../utils/delay';

const TEAMS_MOCK = require('./teams.json');

const BASE_URL = 'http://api.football-data.org/v2/';
const TOKEN = '';

export const loadAllTeams = async (competitionId: AllowedCompetitions): Promise<TeamShort[]> => {
  // TODO: use in UI.
  await delay(1000);
  const teams = TEAMS_MOCK;
  return teams.teams;

  const response = await fetch(`${BASE_URL}competitions/${competitionId}/teams`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  console.log('response.status: ', response.status);
  console.log('response.statusText: ', response.statusText);
  const result = (await response.json()) as TeamShortResponsePayload;
  return result.teams;
};

export const loadTeam = async (teamId: string): Promise<TeamFull> => {
  // TODO: use in UI.
  await delay(1000);
  const response = await fetch(`${BASE_URL}teams/${teamId}`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  const result = (await response.json()) as TeamFullResponsePayload;
  return result;
};
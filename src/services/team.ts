import { AllowedCompetitions } from './constants';
import {
  Match,
  MatchResponsePayload,
  TeamFull,
  TeamFullResponsePayload,
  TeamShort,
  TeamShortResponsePayload,
} from './types';
import { delay } from '../utils/delay';

const TEAMS_MOCK = require('./teamsMock.json');
const TEAM_MOCK = require('./teamMock.json');
const MATCHES_MOCK = require('./matches.json');

const BASE_URL = 'https://api.football-data.org/v2/';
const TOKEN = '';

export const loadAllTeams = async (competitionId: AllowedCompetitions): Promise<TeamShort[]> => {
  // TODO: use in UI.
  await delay(1000);
  const teams = TEAMS_MOCK;
  // return teams.teams;

  const response = await fetch(`${BASE_URL}competitions/${competitionId}/teams`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  const result = (await response.json()) as TeamShortResponsePayload;

  return result.teams;
};

export const loadTeam = async (teamId: number): Promise<TeamFull> => {
  console.log('teamId: ', teamId);
  // TODO: use in UI.
  await delay(1000);
  // return TEAM_MOCK;
  const response = await fetch(`${BASE_URL}teams/${teamId}`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  const result = (await response.json()) as TeamFullResponsePayload;
  return result;
};

export const loadMatches = async (teamId: number): Promise<Match[]> => {
  // TODO: use in UI.
  await delay(1000);

  const now = new Date();
  const dateFrom = now.toISOString().slice(0, 10);
  const dateTo = new Date(now.getTime() + 31540000000).toISOString().slice(0, 10);
  const response = await fetch(
    `${BASE_URL}teams/${teamId}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
    {
      method: 'GET',
      headers: {
        'X-Auth-Token': TOKEN,
      },
    },
  );
  const result = (await response.json()) as MatchResponsePayload;
  console.log('result: ', result);
  return result.matches;
};

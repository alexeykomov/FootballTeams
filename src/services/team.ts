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

export const loadTeam = async (teamId: number): Promise<TeamFull> => {
  // TODO: use in UI.
  await delay(1000);
  return TEAM_MOCK;
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
  return MATCHES_MOCK;
  const dateFrom = new Date().toISOString().slice(0, 10);
  const response = await fetch(`${BASE_URL}teams/${teamId}/matches&dateFrom${dateFrom}`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  const result = (await response.json()) as MatchResponsePayload;
  return result.matches;
};

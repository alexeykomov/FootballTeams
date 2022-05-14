import { AllowedCompetitions } from './constants';
import {
  TeamFull,
  TeamFullResponsePayload,
  TeamShort,
  TeamShortResponsePayload
} from './types';

const BASE_URL = 'http://api.football-data.org/v2/';
const TOKEN = '';

export const loadAllTeams = async (competitionId: AllowedCompetitions): Promise<TeamShort[]> => {
  // TODO: extract into util.
  await new Promise((res) => setTimeout(res, 1000));
  const response = await fetch(`${BASE_URL}competitions/${competitionId}/teams`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  const result = (await response.json()) as TeamShortResponsePayload;
  return result.teams;
};

export const loadTeam = async (teamId: string): Promise<TeamFull> => {
  // TODO: extract into util.
  await new Promise((res) => setTimeout(res, 1000));
  const response = await fetch(`${BASE_URL}teams/${teamId}`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  const result = (await response.json()) as TeamFullResponsePayload;
  return result;
};

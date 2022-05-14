export interface TeamShortResponsePayload {
  teams: TeamShort[];
}

export type TeamFullResponsePayload = TeamFull;

interface Area {
  id: number;
  name: string;
}

export interface TeamShort {
  id: string;
  area: Area;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

export interface TeamFull extends TeamShort {
  squad: SquadMember[];
}

export interface SquadMember {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  role: string;
}

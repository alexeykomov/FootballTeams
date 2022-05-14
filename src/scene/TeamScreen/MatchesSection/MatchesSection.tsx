import React, { useCallback } from 'react';
import { loadMatches } from '../../../services/team';
import { useDataApi } from '../../../hooks/use-data-api';
import { Match } from '../../../services/types';
import { InteractiveError } from '../../../components/InteractiveError/InteractiveError';
import { Text } from 'react-native';
import { Loader } from '../../../components/Loader/Loader';

interface MatchesSectionProps {
  teamId: number;
}

const getNameOfRivalTeam = (match: Match, currTeamId: number) => {
  if (currTeamId === match.homeTeam.id) {
    return match.awayTeam.name;
  }
  if (currTeamId === match.awayTeam.id) {
    return match.homeTeam.name;
  }
};

export const MatchesSection = ({ teamId }: MatchesSectionProps) => {
  const loadMatchesForId = useCallback(() => {
    return loadMatches(teamId);
  }, [teamId]);
  const [
    { data: matches, isLoading, isError: isErrorMatches, errorMessage: errorMessageMatches },
    doFetch,
  ] = useDataApi<Match[] | null>(loadMatchesForId, null);
  if (isLoading) {
    return <Loader />;
  }
  if (isErrorMatches || matches === null) {
    return <InteractiveError errorDesc={errorMessageMatches} onPress={doFetch} />;
  }
  return (
    <>
      {matches.map((m: Match) => (
        <>
          <Text>{m.competition.name}</Text>
          <Text>{getNameOfRivalTeam(m, teamId)}</Text>
          <Text>{m.utcDate}</Text>
        </>
      ))}
    </>
  );
};

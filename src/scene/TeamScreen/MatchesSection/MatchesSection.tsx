import React, { useCallback } from 'react';
import { useDataApi } from '../../../hooks/use-data-api';
import { InteractiveError } from '../../../components/InteractiveError/InteractiveError';
import { Text, View } from 'react-native';
import { Loader } from '../../../components/Loader/Loader';
import { getNameOfRivalTeam } from './MatchesSection.utils';
import { style } from './MatchesSection.styles';
import { NoData } from '../../../components/NoData/NoData';
import API from 'test-task-football-teams-api';
import { AUTH_TOKEN } from '../../../config';
import { Match } from 'test-task-football-teams-api/lib/types';

interface MatchesSectionProps {
  teamId: number;
}

export const MatchesSection = ({ teamId }: MatchesSectionProps) => {
  const loadMatchesForId = useCallback(() => {
    return API.loadMatches(AUTH_TOKEN, teamId);
  }, [teamId]);
  const [{ data, isLoading, isError, errorMessage }, doFetch] = useDataApi<Match[] | null>(
    loadMatchesForId,
    null,
  );
  if (isLoading) {
    return <Loader />;
  }
  if (isError || !data) {
    return <InteractiveError errorDesc={errorMessage} onPress={doFetch} />;
  }
  if (data.length === 0) {
    return <NoData onPress={doFetch} desc="No upcoming matches for team" />;
  }
  return (
    <>
      {data.map((m: Match) => (
        <View style={style.root} key={m.id}>
          <View style={style.dataRow} key="comp">
            <Text style={[style.text, style.textMatch]}>{m.competition.name}</Text>
          </View>
          <View style={style.dataRow} key="team">
            <Text style={style.text}>Rival team: </Text>
            <Text style={style.text}>{getNameOfRivalTeam(m, teamId)}</Text>
          </View>
          <View style={style.dataRow} key="date">
            <Text style={style.text}>Date: </Text>
            <Text style={style.text}>{new Date(m.utcDate).toLocaleString()}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

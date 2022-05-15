import React, { useCallback } from 'react';
import { loadMatches } from '../../../services/team';
import { useDataApi } from '../../../hooks/use-data-api';
import { Match } from '../../../services/types';
import { InteractiveError } from '../../../components/InteractiveError/InteractiveError';
import { Text, View } from 'react-native';
import { Loader } from '../../../components/Loader/Loader';
import { getNameOfRivalTeam } from './MatchesSection.utils';
import { style } from './MatchesSection.styles';

interface MatchesSectionProps {
  teamId: number;
}

export const MatchesSection = ({ teamId }: MatchesSectionProps) => {
  const loadMatchesForId = useCallback(() => {
    return loadMatches(teamId);
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

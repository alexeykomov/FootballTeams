import React, { useCallback, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDataApi } from '../../hooks/use-data-api';
import { loadTeam } from '../../services/team';
import { TeamListError } from '../../components/TeamListError/TeamListError';
import { style } from './TeamScreen.styles';
import { SquadMember, TeamFull } from '../../services/types';
import { Loader } from '../../components/Loader/Loader';
import { Flag } from '../../components/Flag/Flag';
import { MatchesSection } from './MatchesSection/MatchesSection';

interface TeamScreenProps {
  teamId: number;
}

export const TeamScreen = ({ teamId }: TeamScreenProps) => {
  const loadTeamsForId = useCallback(() => {
    return loadTeam(teamId);
  }, [teamId]);
  const [{ data, isLoading, isError, errorMessage }, doFetch] = useDataApi<TeamFull | null>(
    loadTeamsForId,
    null,
  );
  useEffect(() => {
    if (!data && !isLoading && !isError) {
      doFetch();
    }
  });
  console.log('render: ');

  return (
    <View style={style.root}>
      {isError && <TeamListError errorDesc={errorMessage} onPress={doFetch} />}
      {!isError && data !== null && (
        <ScrollView>
          <View style={style.content}>
            <View style={style.info}>
              <View style={style.flagCont}>
                <Flag flagName={data.tla} uri={data.crestUrl} />
              </View>
              <Text>{data.name}</Text>
            </View>
            <Text style={style.playersHeader}>Players:</Text>
            {data.squad.map((d: SquadMember) => (
              <Text>{d.name}</Text>
            ))}
          </View>
          <MatchesSection teamId={teamId} />
        </ScrollView>
      )}
      {isLoading && !data && <Loader />}
    </View>
  );
};

TeamScreen.options = {
  topBar: {
    title: {
      color: 'black',
    },
    background: {
      color: 'lightblue',
    },
  },
};

import React, { useCallback, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDataApi } from '../../hooks/use-data-api';
import { InteractiveError } from '../../components/InteractiveError/InteractiveError';
import { style } from './TeamScreen.styles';
import { Loader } from '../../components/Loader/Loader';
import { Flag } from '../../components/Flag/Flag';
import { MatchesSection } from './MatchesSection/MatchesSection';
import { NoData } from '../../components/NoData/NoData';
import API from 'test-task-football-teams-api';
import { AUTH_TOKEN } from '../../config';
import { SquadMember, TeamFull } from 'test-task-football-teams-api/lib/types';

interface TeamScreenProps {
  teamId: number;
}

export const TeamScreen = ({ teamId }: TeamScreenProps) => {
  const loadTeamsForId = useCallback(() => {
    return API.loadTeam(AUTH_TOKEN, teamId);
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
  console.log('data: ', data);

  const renderPlayers = () =>
    data && data.squad.length !== 0 ? (
      data.squad.map((d: SquadMember) => (
        <View style={style.playerEntry} key={d.id}>
          <Text style={style.playerText}>{d.name}</Text>
        </View>
      ))
    ) : (
      <NoData onPress={doFetch} desc="No players on this team" />
    );

  return (
    <View style={style.root}>
      {isError && <InteractiveError errorDesc={errorMessage} onPress={doFetch} />}
      {!isError && !isLoading && data !== null && (
        <ScrollView>
          <View style={style.content}>
            <View style={style.info}>
              <View style={style.flagCont}>
                <Flag flagName={data.tla} uri={data.crestUrl} />
              </View>
              <Text style={style.headerTeam}>{data.name}</Text>
            </View>
            <Text style={style.headerPlayers}>Players</Text>
            {renderPlayers()}
            <Text style={style.headerMatches}>Matches</Text>
            <MatchesSection teamId={teamId} />
          </View>
        </ScrollView>
      )}
      {isLoading && (!data || data.squad.length === 0) && <Loader />}
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

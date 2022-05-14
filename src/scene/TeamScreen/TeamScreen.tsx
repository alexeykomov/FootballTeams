import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDataApi } from '../../hooks/use-data-api';
import { loadTeam } from '../../services/team';
import { TeamListError } from '../TeamListScreen/TeamListError/TeamListError';
import { style } from './TeamScreen.styles';
import { TeamFull } from '../../services/types';

interface TeamScreenProps {
  teamId: string;
}

export const TeamScreen = ({ teamId }: TeamScreenProps) => {
  const loadTeamsForId = useCallback(() => {
    return loadTeam(teamId);
  }, [teamId]);
  const [{ data, isLoading, isError }, doFetch] = useDataApi<TeamFull | null>(loadTeamsForId, null);
  useEffect(() => {
    if (!data && !isLoading && !isError) {
      doFetch();
    }
  });
  console.log('render: ');

  return (
    <View style={style.root}>
      {isError && <TeamListError />}
      {!isError && ((isLoading && data === null) || !isLoading) && <View />}
      {isLoading && !data && <ActivityIndicator />}
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

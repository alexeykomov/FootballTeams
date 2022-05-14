import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useDataApi } from '../../hooks/use-data-api';
import { loadTeam } from '../../services/team';
import { TeamListError } from '../TeamListScreen/TeamListError/TeamListError';
import { style } from '../TeamListScreen/TeamListScreen.styles';

interface TeamScreenProps {
  teamId: string;
}

export const TeamScreen = ({ teamId }: TeamScreenProps) => {
  const loadTeamsForId = useCallback(() => {
    return loadTeam(teamId);
  }, [teamId]);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(loadTeamsForId, null);
  useEffect(() => {
    if (!data && !isLoading && !isError) {
      doFetch();
    }
  });
  console.log('render: ');

  return (
    <View style={style.root}>
      {isError && <TeamListError />}
      {!isError && ((isLoading && data.length !== 0) || !isLoading) && <View />}
      {isLoading && !data && <ActivityIndicator />}
    </View>
  );
};

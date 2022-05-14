import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDataApi } from '../../hooks/use-data-api';
import { AllowedCompetitions } from '../../services/constants';
import { loadAllTeams } from '../../services/team';
import { TeamShort } from '../../services/types';
import { TeamListError } from './TeamListError/TeamListError';
import { TeamListRow } from './TeamListRow/TeamListRow';
import { style } from './TeamListScreen.styles';
import { Navigation } from 'react-native-navigation';

interface TeamListScreenProps {
  competitionId: AllowedCompetitions;
}

export const TeamListScreen = ({ competitionId }: TeamListScreenProps) => {
  const loadAllTeamsForCompetition = useCallback(() => {
    return loadAllTeams(competitionId);
  }, [competitionId]);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(loadAllTeamsForCompetition, []);
  useEffect(() => {
    if ((!data || data.length === 0) && !isLoading && !isError) {
      doFetch();
    }
  });
  console.log('render: ');

  return (
    <View style={style.root}>
      {isError && <TeamListError />}
      {!isError && ((isLoading && data.length !== 0) || !isLoading) && (
        <FlatList<TeamShort>
          data={data}
          renderItem={(dataItem) => <TeamListRow onTeamPress={() => {}} team={dataItem.item} />}
          onRefresh={doFetch}
          refreshing={isLoading}
          ListEmptyComponent={() => <Text>Empty list</Text>}
        />
      )}
      {isLoading && data.length === 0 && <ActivityIndicator />}
    </View>
  );
};

Navigation.registerComponent('TeamListScreen', () => TeamListScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'TeamListScreen',
            },
          },
        ],
      },
    },
  });
});

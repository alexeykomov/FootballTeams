import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
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
  componentId: string;
}

export const TeamListScreen = ({ competitionId, componentId }: TeamListScreenProps) => {
  const loadAllTeamsForCompetition = useCallback(() => {
    return loadAllTeams(competitionId);
  }, [competitionId]);
  const [{ data, isLoading, isError }, doFetch] = useDataApi<TeamShort[]>(
    loadAllTeamsForCompetition,
    [],
  );
  useEffect(() => {
    if ((!data || data.length === 0) && !isLoading && !isError) {
      doFetch();
    }
  });
  console.log('render: ');
  console.log('data: ', data);
  console.log('isError: ', isError);

  return (
    <View style={style.root}>
      {isError && <TeamListError />}
      {!isError && ((isLoading && data.length !== 0) || !isLoading) && (
        <FlatList<TeamShort>
          data={data}
          renderItem={(dataItem) => (
            <TeamListRow
              onTeamPress={() => {
                Navigation.push(componentId, {
                  component: {
                    name: 'TeamScreen', // Push the screen registered with the 'Settings' key
                    options: {
                      // Optional options object to configure the screen
                      topBar: {
                        title: {
                          text: `Team ${dataItem.item.name}`, // Set the TopBar title of the new Screen
                        },
                      },
                    },
                  },
                });
              }}
              team={dataItem.item}
            />
          )}
          onRefresh={doFetch}
          refreshing={isLoading}
          ListEmptyComponent={() => <Text>Empty list</Text>}
        />
      )}
      {isLoading && data.length === 0 && <ActivityIndicator />}
    </View>
  );
};

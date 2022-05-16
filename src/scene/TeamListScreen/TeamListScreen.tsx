import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { useDataApi } from '../../hooks/use-data-api';
import { AllowedCompetitions } from '../../services/constants';
import { TeamShort } from '../../services/types';
import { InteractiveError } from '../../components/InteractiveError/InteractiveError';
import { TeamListRow } from './TeamListRow/TeamListRow';
import { style } from './TeamListScreen.styles';
import { Navigation } from 'react-native-navigation';
import { loadAllTeams } from '../../services/team';
import { createOnTeamPress } from './TeamListScreen.utils';
import { Loader } from '../../components/Loader/Loader';
import { NoData } from '../../components/NoData/NoData';

interface TeamListScreenProps {
  competitionId: AllowedCompetitions;
  componentId: string;
}

export const TeamListScreen = ({ competitionId, componentId }: TeamListScreenProps) => {
  const loadAllTeamsForCompetition = useCallback(() => {
    return loadAllTeams(competitionId);
  }, [competitionId]);
  const [{ data, isLoading, isError, errorMessage }, doFetch] = useDataApi<TeamShort[]>(
    loadAllTeamsForCompetition,
    [],
  );
  useEffect(() => {
    if ((!data || data.length === 0) && !isLoading && !isError) {
      doFetch();
    }
  });
  return (
    <View style={style.root}>
      {isError && <InteractiveError onPress={doFetch} errorDesc={errorMessage} />}
      {!isError && ((isLoading && data.length !== 0) || !isLoading) && (
        <FlatList<TeamShort>
          data={data}
          renderItem={(dataItem) => (
            <TeamListRow
              onTeamPress={createOnTeamPress(componentId, dataItem)}
              team={dataItem.item}
            />
          )}
          onRefresh={doFetch}
          refreshing={isLoading}
          ListEmptyComponent={() => (
            <NoData
              onPress={doFetch}
              desc={`No matches are present for competition ${competitionId}`}
            />
          )}
        />
      )}
      {isLoading && data.length === 0 && <Loader />}
    </View>
  );
};

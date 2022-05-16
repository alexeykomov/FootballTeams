import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { style } from './TeamListRow.styles';
import { Flag } from '../../../components/Flag/Flag';
import { TeamShort } from 'test-task-football-teams-api/lib/types';

interface TeamListRowProps {
  team: TeamShort;
  onTeamPress: () => void;
}

export const TeamListRow = ({ team, onTeamPress }: TeamListRowProps) => {
  return (
    <TouchableHighlight
      style={style.root}
      onPress={onTeamPress}
      key={team.id}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
    >
      <>
        <Flag flagName={team.tla} uri={team.crestUrl} />
        <View style={style.titleCont}>
          <Text>{team.name}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { ErrorBoundary } from '../../../components/ErrorBoundary';
import { TeamShort } from '../../../services/types';
import { CUSTOM_STYLE_FOR_FLAG } from './TeamListRow.constants';
import { style } from './TeamListRow.styles';

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
        <ErrorBoundary>
          <View style={style.flagCont}>
            <View style={[style.flagSubCont, CUSTOM_STYLE_FOR_FLAG[team.tla]]}>
              {team.crestUrl.endsWith('.svg') ? (
                <SvgUri height="70%" width="70%" uri={team.crestUrl} />
              ) : (
                <Image source={{ uri: team.crestUrl }} />
              )}
            </View>
          </View>
        </ErrorBoundary>
        <View style={style.titleCont}>
          <Text>{team.name}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

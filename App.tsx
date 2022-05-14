import React from 'react';
import { SafeAreaView } from 'react-native';
import { TeamListScreen } from './src/scene/TeamListScreen/TeamListScreen';
import { AllowedCompetitions } from './src/services/constants';
import { style } from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={style.root}>
      <TeamListScreen competitionId={AllowedCompetitions.WC} />
    </SafeAreaView>
  );
}

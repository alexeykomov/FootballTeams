import React from 'react';
import { SafeAreaView } from 'react-native';
import { TeamListScreen } from './src/scene/TeamListScreen/TeamListScreen';
import { AllowedCompetitions } from './src/services/constants';
import { style } from './App.styles';

interface AppProps {
  componentId: string;
}

export default function App({ componentId }: AppProps) {
  return <TeamListScreen competitionId={AllowedCompetitions.WC} componentId={componentId} />;
}

App.options = {
  topBar: {
    title: {
      text: 'Teams',
      color: 'black',
    },
    background: {
      color: 'lightblue',
    },
  },
};

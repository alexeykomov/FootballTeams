import React from 'react';
import { TeamListScreen } from './src/scene/TeamListScreen/TeamListScreen';
import { AllowedCompetitions } from './src/services/constants';

interface AppProps {
  componentId: string;
}

export default function App({ componentId }: AppProps) {
  return <TeamListScreen competitionId={AllowedCompetitions.CL} componentId={componentId} />;
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

import React from 'react';
import { TeamListScreen } from './src/scene/TeamListScreen/TeamListScreen';
import { AllowedCompetitions } from 'test-task-football-teams-api/lib/constants';

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

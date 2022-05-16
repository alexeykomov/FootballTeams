import { ListRenderItemInfo } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { TeamShort } from 'test-task-football-teams-api/lib/types';

export const createOnTeamPress = (componentId: string, dataItem: ListRenderItemInfo<TeamShort>) => {
  return () => {
    Navigation.push(componentId, {
      component: {
        name: 'TeamScreen',
        passProps: {
          teamId: dataItem.item.id,
        },
        options: {
          topBar: {
            title: {
              text: `Team ${dataItem.item.name}`,
            },
          },
        },
      },
    });
  };
};

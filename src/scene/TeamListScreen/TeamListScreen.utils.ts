import { ListRenderItemInfo } from 'react-native';
import { TeamShort } from '../../services/types';
import { Navigation } from 'react-native-navigation';

export const createOnTeamPress = (componentId: string, dataItem: ListRenderItemInfo<TeamShort>) => {
  return () => {
    Navigation.push(componentId, {
      component: {
        name: 'TeamScreen',
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

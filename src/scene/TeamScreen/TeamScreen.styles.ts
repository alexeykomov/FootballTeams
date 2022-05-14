import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'violet',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  flagCont: {
    paddingRight: 20,
  },
  playersHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

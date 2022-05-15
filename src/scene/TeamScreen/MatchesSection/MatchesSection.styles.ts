import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
  },
  textMatch: {
    fontWeight: 'bold',
  },
});
